import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import XLSX from 'xlsx';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


export default function Application({el}) {

    const agents = useSelector(state => state.adminReducer.agents)
    // const buyer = agents.filter(agent => agent._id === el.buyer)[0]
    // console.log(buyer)

    
//       let buyer = agents.find(agent => agent._id === el.buyer);
    const date = new Date(el.date)
    const value = el.goods.reduce((acc, el) => {
      return acc + el.value * el.good.price;
    }, 0);
    function makePDF() {
      const docDefinition = {
        content: [
          {
            layout: 'lightHorizontalLines',
            table: {
              headerRows: 4,
              widths: [150, 150, 150],
              body: [
                ['продавец', 'Солёнка', 'тел: +78985232616'],
                ['покупатель:', el.buyer.title, `ИНН:${el.buyer.itn}`,],
                ['номер заявки:', el.regnumber, '',],
                ['Товар:', 'количество (шт)', 'цена (руб)'],
                ...el.goods.map((good) => {
                  return [good.title, good.value, good.good.price * good.value];
                }),
                ['', '', 'Итог:'],
                ['', '', value]
              ]
            }
          }
        ]
      };
      pdfMake.createPdf(docDefinition).download();
    }
    function makeDBF() {
      const data = {
        cols: [{ name: "A", key: 0 }, { name: "B", key: 1 }, { name: "C", key: 2 }],
        data: [
          ["id", "название", "цена"],
          [1, "огурец", 7262],
          [2, "икра", 6969],
          ...el.goods.map((good) => {
            return [good.title, good.value];
          }),
        ]
      };
      var worksheet = XLSX.utils.aoa_to_sheet(data.data);
      var new_workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(new_workbook, worksheet, "SheetJS");
  
      XLSX.writeFile(new_workbook, 'privet.dbf', { type: 'dbf' });
    }
    return (
        <div style={{marginBottom: "100px"}}>
            <p>Регистрационный номер: {el.regnumber}</p><p>{el.buyer.title}</p>
            <p>{`Дата: ${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`}</p>
            <p>{el.isready}</p>
            {el.isready === "В обработке" ?
            <>
             <Link to={`/admin/application/${el.regnumber}`} ><button>Просмотр заявки</button>
            </Link>
            <button onClick={makePDF}>DBF</button>
            <button onClick={makeDBF}>PDF</button>
            </>
            : null}
        </div>
//         <>
//         { buyer ? <div style={{marginBottom: "100px"}}>
//             <p>Регистрационный номер: {el.regnumber}</p>
//             <p>{buyer.title}</p>
//             <p>{`Дата: ${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`}</p>
//             <p>{el.isready}</p>
//             <Link to={`/admin/application/${el.regnumber}`} ><button>Просмотр заявки</button></Link>
//         </div> : <p>Nothing to show</p>}

//         </>

    )
}
