import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getGenres, allGames, postGames } from "../actions";
import { Link } from "react-router-dom";
import "../styles/create.css";

function Addgame() {
  let dispatch = useDispatch();
  const allGenres = useSelector((state) => state.genres);
  const allVideoGames = useSelector((state) => state.games);

  const history = useHistory();

  useEffect(() => {
    dispatch(allGames());
    dispatch(getGenres());
  }, [dispatch]);

  let [input, setInput] = useState({
    name: "",
    image: "",
    description: "",
    released: "",
    rating: "",
    genres: [],
    platforms: [],
  });
  console.log(input);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // -------final------

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.name) {
      return alert("ingrese un nombre");
    }
    if (input.name === " ") {
      return alert("solo letras o numeros ");
    }
    if (!input.released) {
      return alert("escoge una fecha");
    }
    if (!input.rating) {
      return alert("ingrese un rating");
    }
    if (!input.description) {
      return alert("falta descripcion!");
    }
    if (!input.genres) {
      return alert("elije un genero");
    }
    if (!input.platforms) {
      return alert("elije una plaforma");
    }

    dispatch(postGames(input));
    alert("video juego creado!");

    history.push("/home");
  };

  ///////////////////////////////////////////////////////////////////////
  const handleSelectForGenres = (e) => {
    setInput({
      ...input,
      genres: [...input.genres, e.target.value],
    });
  };
  //////////////////////////////////////////////////////////////////////////
  const handleSelectForPlatform = (e) => {
    //seteamos para cambiar el form
    setInput({
      ...input,
      platforms: [...input.platforms, e.target.value],
    });
  };
  //////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////

  const setArr = []; // aca voy a tener todas las plataformas
  console.log(setArr);
  allVideoGames.map((e) => e.platforms.map((e) => setArr.push(e))); // aca me mapeo todos los juegos,despues mapeo cada una de las plataformas y con un push guardo todo  a mi nuevo arreglo setArr

  return (
    <> 
      <div className="contenedorbtn">
      <Link to="/home">
        <button className="buttonnn">back to home</button>
      </Link>
      </div>
      <div className="componente">
        
        <div className="componente2">
          <div className="componente3">
            <div className="formulario1">
              <div className="formContainer2">
                <h1 className="title" type="submit">
                  Create Game
                </h1>

                {/* --------------------------Name---------------------------- */}
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="formulario">
                    <div className="divContainer">
                      <label className="labelContainer1" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="inputContainer"
                        type="text"
                        value={input.name}
                        name="name"
                        required=""
                        autoComplete="off"
                        placeholder="Name"
                        onChange={(e) => handleChange(e)}
                      />

                      {!input.name ? (
                        <h4 className="fname">ingrese un nombre</h4>
                      ) : (
                        false
                      )}
                    </div>

                    {/* -------------------------Releadsed---------------------------- */}
                    <div className="divContainer">
                      <label className="labelContainer3" htmlFor="released">
                        Released
                      </label>
                      <input
                        className="inputContainer"
                        type="date"
                        value={input.released}
                        name="released"
                        required=""
                        autoComplete="off"
                        placeholder="Name"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    {/* -------------------------rating---------------------------- */}
                    <div className="divContainer">
                      <label className="labelContainer4" htmlFor="rating">
                        Rating:
                      </label>
                      <input
                        className="inputContainer"
                        type="number"
                        value={input.rating}
                        name="rating"
                        required=""
                        autoComplete="off"
                        placeholder="Rating"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>

                    {/* -------------------------IMG---------------------------- */}
                    <div className="divContainer">
                      <label className="labelContainer5" htmlFor="image">
                        Image:
                      </label>
                      <input
                        className="inputContainer"
                        type="text"
                        value={input.image}
                        name="image"
                        required=""
                        autoComplete="off"
                        placeholder="http://image_path.jpg"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    {/* -------------------------Description---------------------------- */}

                    <div className="divContainer">
                      <label className="labelContainer2" htmlFor="image">
                        Description:
                      </label>
                      <input
                        className="inputDescriContainer"
                        type="text"
                        value={input.description}
                        name="description"
                        required=""
                        autoComplete="off"
                        placeholder=""
                        onChange={(e) => handleChange(e)}
                      />
                    </div>

                    {/* -------------------------Genres---------------------------- */}
                    <div className="selectContainer">
                      <div>
                        <select onChange={(e) => handleSelectForGenres(e)}>
                          <option value="genres">Genres</option>
                          {allGenres.map((e) => (
                            <option key={e.id} value={e.name}>
                              {e.name}
                            </option>
                          ))}
                        </select>

                        <div>
                          {input.genres.map((e) => (
                            <div key={e}>
                              <p> {e} </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* -------------------------Platforms---------------------------- */}

                      <div>
                        <select onChange={(e) => handleSelectForPlatform(e)}>
                          <option value="platforms">Platforms</option>

                          {setArr.map((e, i) => (
                            <option key={i} value={e}>
                              {e}
                            </option> //mapeo cada una de las opciones de platform del array que arme arriba
                          ))}
                        </select>

                        <div>
                          {input.platforms.map((e) => (
                            <div key={e}>
                              <p>{e}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button className="formCreateBtn" type="submit">
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addgame;
