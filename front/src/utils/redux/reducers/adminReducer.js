
import { DELETE_FROM_APPLICATION, INIT_AGENTS, REQUEST_GOODS, EDIT_GOODS, DELETE_GOODS, INIT_APPLICATIONS} from "../actionTypes"

function adminReducer(state = { agents: [], applications: [], goodsList: [] }, action) {
  switch (action.type) {
    case REQUEST_GOODS:
      return { ...state, goodsList: action.payload };
    case INIT_AGENTS:
      return { ...state, agents: action.payload };
    case INIT_APPLICATIONS:
      return { ...state, applications: action.payload }
    case EDIT_GOODS:
      const editedGoodIndex = state.goodsList.findIndex(good => good._id === action.payload._id)
      return { ...state, goodsList: [
        ...state.goodsList.slice(0, editedGoodIndex),
        action.payload,
        ...state.goodsList.slice(editedGoodIndex + 1)
      ]};
    case DELETE_GOODS:
      return { ...state, goodsList: state.goodsList.filter(good => good._id !== action.payload._id)};
    case DELETE_FROM_APPLICATION:
      const application = state.applications.find(el => el.regnumber == action.payload.regnumber);
      console.log(application);
      const newgoods = application.goods.filter(el => el.title !==action.payload.goodTitle)
      // console.log(application["goods"]);
      application["goods"]= newgoods;
      // const constApplications = {...state, applications: [...state.applications.filter(app => app.regnumber !== action.payload.regnumber), application]}
      // console.log(constApplications);
      return {...state, applications:[...state.applications.filter(app => app.regnumber !== action.payload.regnumber), application]}
    default:
      return state;
  }
}

export default adminReducer;
