import { takeLatest, call, put } from 'redux-saga/effects';
// put es la manera de hacer dispatch al store 
import axios from 'axios';


export function * watcherSaga(){
  yield takeLatest('API_CALL_REQUEST', workerSaga);
}

function fetchDog(){
  return axios({
    method: 'get',
    url: 'https://dog.ceo/api/breeds/image/random'
  });
}

function * workerSaga(){
  try{
    const response = yield call(fetchDog);
    const dog = response.data.message;
    // ahi es donde mete la imagen del perro 
    yield put({type: 'API_CALL_SUCCESS', dog: dog});
  } catch(error){
    yield put({type: 'API_CALL_FAILURE', error});
    // así como podemos desestructurar--> object-shorthand  
  }
}

