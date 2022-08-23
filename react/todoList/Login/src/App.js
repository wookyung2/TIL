import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const createLoginStart = (id, gender) => async (dispatch, getState) => {
  dispatch({ type: "LOGIN-REQUEST" });

  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((json) => {
      if (json.id) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { id: json.userId, gender: gender },
        });
      } else {
        dispatch({ type: "LOGIN_FAILURE", payload: "요청실패" });
      }
    });
};

const Form = () => {
  const isFetching = useSelector((state) => state.user.isFetching);
  const error = useSelector((state) => state.user.error);

  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [gender, setGender] = React.useState("");

  const idRef = React.useRef(null);
  const pwRef = React.useRef(null);
  const genderRef = React.useRef(null);
  const idInvalid = !(id.length >= 1 && id.length <= 20);
  const pwInvalid = !(pw.length >= 12 && pw.length <= 20);
  const handleClick = (e) => {
    if (idInvalid) {
      setId("");
      idRef.current.focus();
      alert("유효하지 않은 id입니다");
      e.preventDefault();
    } else if (pwInvalid) {
      setPw("");
      pwRef.current.focus();
      alert("유효하지 않은 password입니다");
      e.preventDefault();
    } else {
      // name이 id 라는 변수에 들어있음
      dispatch(createLoginStart(id, gender));
    }
  };
  const handleChangeId = (e) => {
    setId(e.target.value);
  };
  const handleChangePw = (e) => {
    setPw(e.target.value);
  };
  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };

  return (
    <div>
      {isFetching && <div>"서버응답기다리는중"</div>}
      <div>
        <input
          ref={idRef}
          type="text"
          name="id"
          value={id}
          placeholder="6글자 이상 20글자 이하"
          onChange={handleChangeId}
        />
        {/* 에러메세지 자리 */}
        {idInvalid && "유효하지 않은 id입니다"}
      </div>
      <div>
        <input
          ref={pwRef}
          type="text"
          name="password"
          value={pw}
          placeholder="12글자 이상 20글자 이하"
          onChange={handleChangePw}
        />
        {/* 에러메세지 자리 */}
        {pwInvalid && "유효하지 않은 password입니다"}
      </div>
      {/* <div>
        <input
          ref={genderRef}
          type="text"
          name="gender"
          value={gender}
          placeholder="성별을 입력해주세요"
          onChange={handleChangeGender}
        />
      </div> */}
      <select
        ref={genderRef}
        value={gender}
        name="gener"
        onChange={handleChangeGender}
      >
        <option value="gender">gender</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <button type="button" onClick={handleClick} disabled={!(id || pw)}>
        회원가입
      </button>
      {error && <div>요청실패</div>}
    </div>
  );
};

const useName = () => {
  const nameSelector = (state) => state.user.name;
  const name = useSelector(nameSelector);
  return name;
};

const useGender = () => {
  const genderSelector = (state) => state.user.gender;
  const gender = useSelector(genderSelector);
  return gender;
};

const Hello = () => {
  const name = useName();
  const gender = useGender();
  return (
    <>
      <div>name: {name}</div>

      <div> gender:{gender}</div>
    </>
  );
};

const App = () => {
  const name = useName();
  // const name = useSelector(({ user }) => user.name);
  // const name = useSelector(({ user: { name } }) => name);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/register"
          element={!name ? <Form /> : <Navigate to="/" replace />}
        />
        <Route
          path="/"
          element={!1 ? <Navigate to="/register" replace /> : <Hello />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
