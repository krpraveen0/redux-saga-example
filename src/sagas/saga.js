
import {delay,put,takeEvery} from "redux-saga/effects";

function* ageUpAsync(){
    yield delay(4000);
    yield put({type: "AGE_UP_ASYNC",value:1});
}

function* ageDownAsync(){
    yield delay(2000);
    yield put({type:"AGE_DOWN_ASYNC",value:1});
}
export function* watchAgeUp(){
    yield takeEvery("AGE_UP",ageUpAsync);
    yield takeEvery("AGE_DOWN",ageDownAsync);
}