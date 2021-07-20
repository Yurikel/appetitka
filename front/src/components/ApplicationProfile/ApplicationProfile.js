import React from 'react';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;



export default function ApplicationProfile({ el }) {
console.log(el);
  const value = el.goods.reduce((acc, el) => {
    return acc + el.value * el.good.price;
  }, 0);
  function makePDF() {
    console.log('123');
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
  return (
    <div style={{ marginBottom: "100px" }}>
      <p>Регистрационный номер: {el.regnumber}</p>
      {el.goods.map(el => <><p>{el.title}</p><p>{el.value}</p></>)}
      <p>{el.isready}</p>
      <button onClick={makePDF}>PDF</button>
    </div>
  );
}
