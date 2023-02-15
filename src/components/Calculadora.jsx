import React, { useState, useRef } from "react";

function Calculadora() {
  const [resultado, setResultado] = useState("");
  const [theme, setTheme] = useState(1);

  const num = useRef("");
  const calCon = useRef("");
  const bolCon = useRef("");
  const resu = useRef("");
  const numbers = useRef("");
  const igual = useRef("");
  const cel = useRef("");

  const uno = () => {
    setResultado(resultado + "1");
  };
  const dos = () => {
    setResultado(resultado + "2");
  };
  const tres = () => {
    setResultado(resultado + "3");
  };
  const cuatro = () => {
    setResultado(resultado + "4");
  };
  const cinco = () => {
    setResultado(resultado + "5");
  };
  const seis = () => {
    setResultado(resultado + "6");
  };
  const ocho = () => {
    setResultado(resultado + "8");
  };
  const siete = () => {
    setResultado(resultado + "7");
  };
  const nueve = () => {
    setResultado(resultado + "9");
  };
  const cero = () => {
    setResultado(resultado + "0");
  };
  const coma = () => {
    if (
      resultado.slice(-1) !== " " &&
      resultado.slice(-1) !== "." &&
      resultado.length >= 1
    ) {
      setResultado(resultado + ".");
    }
  };
  const menos = () => {
    if (
      resultado.slice(-1) !== " " &&
      resultado.slice(-1) !== "." &&
      resultado.length >= 1
    ) {
      setResultado(resultado + " - ");
    }
  };
  const division = () => {
    if (
      resultado.slice(-1) !== " " &&
      resultado.slice(-1) !== "." &&
      resultado.length >= 1
    ) {
      setResultado(resultado + " / ");
    }
  };
  const mas = () => {
    if (
      resultado.slice(-1) !== " " &&
      resultado.slice(-1) !== "." &&
      resultado.length >= 1
    ) {
      setResultado(resultado + " + ");
    }
  };
  const por = () => {
    if (
      resultado.slice(-1) !== " " &&
      resultado.slice(-1) !== "." &&
      resultado.length >= 1
    ) {
      setResultado(resultado + " * ");
    }
  };
  const reset = () => {
    setResultado("");
  };

  const calcular = () => {
    if (resultado.length >= 5 && resultado.slice(-1) !== " ") {
      setResultado(eval(resultado).toString());
    }
  };

  const del = () => {
    if (resultado.slice(-1) === " ") {
      setResultado(resultado.substring(0, resultado.length - 3));
    } else {
      setResultado(resultado.substring(0, resultado.length - 1));
    }
  };

  const theme1 = () => {
    setTheme(1);
  };
  const theme2 = () => {
    setTheme(2);
  };
  const theme3 = () => {
    setTheme(3);
  };
  return (
    <div
      ref={calCon}
      className={`calculadora-container ${theme === 1 ? "tema1" : ""} ${
        theme === 2 ? "tema2" : ""
      } ${theme === 3 ? "tema3" : ""}`}
    >
      <div className="contenedor">
        <div className="bar">
          <div className="left">
            <p>calc</p>
          </div>
          <div className="right">
            <p>THEME</p>
            <div className="temas-container">
              <div className="temas">
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>
              <div
                ref={bolCon}
                className={`bolita-container ${theme === 1 ? "tema1" : ""} ${
                  theme === 2 ? "tema2" : ""
                } ${theme === 3 ? "tema3" : ""}`}
              >
                <div onClick={theme1} className="uno"></div>
                <div onClick={theme2} className="dos"></div>
                <div onClick={theme3} className="tres"></div>
                <div
                  className={`bolita ${theme === 1 ? "tema1" : ""} ${
                    theme === 2 ? "tema2" : ""
                  } ${theme === 3 ? "tema3" : ""}`}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={resu}
          className={`result ${theme === 1 ? "tema1" : ""} ${
            theme === 2 ? "tema2" : ""
          } ${theme === 3 ? "tema3" : ""}`}
        >
          <input
            className={` ${theme === 1 ? "tema1" : ""} ${
              theme === 2 ? "tema2" : ""
            } ${theme === 3 ? "tema3" : ""}`}
            value={resultado}
          />
        </div>
        <div
          ref={numbers}
          className={`numbers ${theme === 1 ? "tema1" : ""} ${
            theme === 2 ? "tema2" : ""
          } ${theme === 3 ? "tema3" : ""}`}
        >
          <div className="number">
            <p
              className={`numeros ${theme === 1 ? "tema1" : ""} ${
                theme === 2 ? "tema2" : ""
              } ${theme === 3 ? "tema3" : ""}`}
              onClick={siete}
            >
              7
            </p>
            <p
              className={`numeros ${theme === 1 ? "tema1" : ""} ${
                theme === 2 ? "tema2" : ""
              } ${theme === 3 ? "tema3" : ""}`}
              onClick={ocho}
            >
              8
            </p>
            <p
              className={`numeros ${theme === 1 ? "tema1" : ""} ${
                theme === 2 ? "tema2" : ""
              } ${theme === 3 ? "tema3" : ""}`}
              onClick={nueve}
            >
              9
            </p>
            <p
              ref={cel}
              onClick={() => resultado.length >= 1 && del()}
              className={`numeros blue ${theme === 1 ? "tema1" : ""} ${
                theme === 2 ? "tema2" : ""
              } ${theme === 3 ? "tema3" : ""}`}
            >
              DEL
            </p>
          </div>
          <div className="number">
            <p
              className={`numeros ${theme === 1 ? "tema1" : ""} ${
                theme === 2 ? "tema2" : ""
              } ${theme === 3 ? "tema3" : ""}`}
              onClick={cuatro}
            >
              4
            </p>
            <p
              className={`numeros ${theme === 1 ? "tema1" : ""} ${
                theme === 2 ? "tema2" : ""
              } ${theme === 3 ? "tema3" : ""}`}
              onClick={cinco}
            >
              5
            </p>
            <p
              className={`numeros ${theme === 1 ? "tema1" : ""} ${
                theme === 2 ? "tema2" : ""
              } ${theme === 3 ? "tema3" : ""}`}
              onClick={seis}
            >
              6
            </p>
            <p
              className={`numeros ${theme === 1 ? "tema1" : ""} ${
                theme === 2 ? "tema2" : ""
              } ${theme === 3 ? "tema3" : ""}`}
              onClick={mas}
            >
              +
            </p>
          </div>
          <div className="number">
            <p
              className={`numeros ${theme === 1 ? "tema1" : ""} ${
                theme === 2 ? "tema2" : ""
              } ${theme === 3 ? "tema3" : ""}`}
              onClick={uno}
            >
              1
            </p>
            <p
              className={`numeros ${theme === 1 ? "tema1" : ""} ${
                theme === 2 ? "tema2" : ""
              } ${theme === 3 ? "tema3" : ""}`}
              onClick={dos}
            >
              2
            </p>
            <p
              className={`numeros ${theme === 1 ? "tema1" : ""} ${
                theme === 2 ? "tema2" : ""
              } ${theme === 3 ? "tema3" : ""}`}
              onClick={tres}
            >
              3
            </p>
            <p
              className={`numeros ${theme === 1 ? "tema1" : ""} ${
                theme === 2 ? "tema2" : ""
              } ${theme === 3 ? "tema3" : ""}`}
              onClick={menos}
            >
              -
            </p>
          </div>
          <div className="number">
            <p
              className={`numeros ${theme === 1 ? "tema1" : ""} ${
                theme === 2 ? "tema2" : ""
              } ${theme === 3 ? "tema3" : ""}`}
              onClick={coma}
            >
              .
            </p>
            <p
              className={`numeros ${theme === 1 ? "tema1" : ""} ${
                theme === 2 ? "tema2" : ""
              } ${theme === 3 ? "tema3" : ""}`}
              onClick={cero}
            >
              0
            </p>
            <p
              className={`numeros ${theme === 1 ? "tema1" : ""} ${
                theme === 2 ? "tema2" : ""
              } ${theme === 3 ? "tema3" : ""}`}
              onClick={division}
            >
              /
            </p>
            <p
              className={`numeros ${theme === 1 ? "tema1" : ""} ${
                theme === 2 ? "tema2" : ""
              } ${theme === 3 ? "tema3" : ""}`}
              onClick={por}
            >
              x
            </p>
          </div>
          <div className="number">
            <p
              ref={cel}
              className={`numeros blue ${theme === 1 ? "tema1" : ""} ${
                theme === 2 ? "tema2" : ""
              } ${theme === 3 ? "tema3" : ""}`}
              onClick={reset}
            >
              RESET
            </p>
            <p
              ref={igual}
              onClick={calcular}
              className={`red numeros ${theme === 1 ? "tema1" : ""} ${
                theme === 2 ? "tema2" : ""
              } ${theme === 3 ? "tema3" : ""}`}
            >
              =
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
