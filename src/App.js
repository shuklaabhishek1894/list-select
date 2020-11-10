import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  /***
   * Method for handle select/uncheked event
   * @param{e}
   * @return {undefined}
   */
  changeCheckBox = e => {
    try {
      const head = e.target.parentNode.parentNode.firstChild.innerHTML;
      const isChecked = e.target.checked;
      const value = e.target.value;
      const jsonObj = {
        value: value,
        type: head
      };
      if (isChecked) {
        let newA = [...this.state.tasks, jsonObj];
        this.setState(() => ({ tasks: newA }));
      } else {
        const taskList = [...this.state.tasks];
        let arrayI = this.state.tasks.findIndex(t => t.value === value);
        taskList.splice(arrayI, 1);
        this.setState(() => ({ tasks: taskList }));
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  /***
   * Mrhod fot Custom UI
   * @param{list} type Array
   * @return {UI}
   */
  ListUI = list =>
    list.map(el => (
      <>
        <li class="list-group-itemx d-flex justify-content-between align-items-center" 
        style={{
          padding: "8px 21px !important",
          marginBottom:"3px",
          border: "1px solid lightgray",
          "margin-bottom": "3px",
          padding: "5px 15px",
          "background-color": "lightgray",
          "border-radius": "9px"
        }}>
          {el.value}
          <span
            class="badge badge-primary badge-pill"
            onClick={e => {
              this.removeSelection(e, el.value);
            }}
          >
            X
          </span>
        </li>
      </>
    ));

  /**
   * Method for remove icon on list
   * @param{e,id}
   * @return{undefined}
   *
   */
  removeSelection = (e, id) => {
    try {
      let collections = document.getElementsByClassName("form-check-input");
      let arrayType = Array.from(collections);
      const taskList = [...this.state.tasks];
      console.log("test name",id,taskList)
      const filteredArray = arrayType.filter(element => element.id === id);

      filteredArray[0].checked = false;

      let arrayI = this.state.tasks.findIndex(t => t.value === id);
      taskList.splice(arrayI, 1);
      this.setState(() => ({ tasks: taskList }));
    } catch (e) {
      console.log("e", e);
    }
  };

  render() {
    const { tasks } = this.state;
    const portugalList = tasks.filter(el => el.type === "Portugal");
    const nicaraguaList = tasks.filter(el => el.type === "Nicaragua");
    const islandsList = tasks.filter(el => el.type === "Marshall Islands");

    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg test " 
        style={{ 
              "background-color": "white!important"
        }}>
        <div class="containerx">
        <div class="left-half">
            <a class="navbar-brand" href="#">LOGO</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            </div>
            <div class="collapse navbar-collapse right-half" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">My Portfolio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Clients</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" display="box">Get in Touch</a>
                </li>
              </ul>
             
            </div>
            </div>
          </nav>
        <div className="container">
        
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body" style={{    "font-size": "13px",
                  "padding": "2.50rem","height": "478px"}}>
                  <div className="con" style={{"text-align": "left"}}>
                    <h5 className="card-title" style={{ "margin-left": "-26px"}}>Portugal</h5>
                    <div style={{"text-align": "left",    "padding": "5px"}}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Aasiya Jayavant"
                        value="Aasiya Jayavant"
                        onChange={e => this.changeCheckBox(e)}
                      />
                      <label className="form-check-label" htmlFor="Aasiya Jayavant">
                        Aasiya Jayavant
                      </label>
                    </div>
                    <div style={{"text-align": "left",    "padding": "5px"}}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Luvleen Lawrence"
                        value="Luvleen Lawrence"
                        onChange={e => this.changeCheckBox(e)}
                      />
                      <label className="form-check-label" htmlFor="Luvleen Lawrence">
                        Luvleen Lawrence
                      </label>
                    </div>
                    <div style={{"text-align": "left",    "padding": "5px"}}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Rey Mibourne"
                        value="Rey Mibourne"
                        onChange={e => this.changeCheckBox(e)}
                      />
                      <label className="form-check-label" htmlFor="Rey Mibourne">
                        Rey Mibourne
                      </label>
                    </div>
                    <div style={{"text-align": "left",    "padding": "5px"}}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Cayla Brister"
                        value="Cayla Brister"
                        onChange={e => this.changeCheckBox(e)}
                      />
                      <label className="form-check-label" htmlFor="Cayla Brister">
                        Cayla Brister
                      </label>
                    </div>
                  </div>
                  <div className="con" style={{"text-align": "left"}}>
                    <h5 className="card-title" style={{ "margin-left": "-26px"}} >Nicaragua</h5>
                    <div style={{"text-align": "left",    "padding": "5px"}}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Dveedaas Nandi"
                        value="Dveedaas Nandi"
                        onChange={e => this.changeCheckBox(e)}
                      />
                      <label className="form-check-label" htmlFor="Dveedaas Nandi">
                        Dveedaas Nandi
                      </label>
                    </div>
                    <div style={{"text-align": "left",    "padding": "5px"}}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Obsey Chidy"
                        value="Obsey Chidy"
                        onChange={e => this.changeCheckBox(e)}
                      />
                      <label className="form-check-label" htmlFor="Obsey Chidy">
                        Obsey Chidy
                      </label>
                    </div>
                    <div style={{"text-align": "left",    "padding": "5px"}}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Xenine Dolezelova"
                        value="Xenine Dolezelova"
                        onChange={e => this.changeCheckBox(e)}
                      />
                      <label className="form-check-label" htmlFor="Xenine Dolezelova">
                        Xenine Dolezelova
                      </label>
                    </div>
                    <div style={{"text-align": "left",    "padding": "5px"}}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Ezequiel Dengra"
                        value="Ezequiel Dengra"
                        onChange={e => this.changeCheckBox(e)}
                      />
                      <label className="form-check-label" htmlFor="Ezequiel Dengra">
                        Ezequiel Dengra
                      </label>
                    </div>
                  </div>
                  <div className="con" style={{"text-align": "left"}}>

                    <h5 className="card-title" style={{ "margin-left": "-26px"}}>Marshall Islands</h5>
                    <div style={{"text-align": "left",    "padding": "5px"}}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Aaron Almaraz"
                        value="Aaron Almaraz"
                        onChange={e => this.changeCheckBox(e)}
                      />
                      <label className="form-check-label" htmlFor="Aaron Almaraz">
                        Aaron Almaraz
                      </label>
                    </div>
                    <div style={{"text-align": "left",    "padding": "5px"}}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="Jelena Almaraz"
                        value="Jelena Almaraz"
                        onChange={e => this.changeCheckBox(e)}
                      />
                      <label className="form-check-label" htmlFor="Jelena Almaraz">
                        Jelena Almaraz
                      </label>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card" style={{ height: "364" }}>
                <div className="card-body"  style={{    "font-size": "13px",
                "padding": "2.50rem","height": "478px"}}>
                  <div>
                    {portugalList.length === 0 ? (
                      void 0
                    ) : (
                      <>
                        <h5>{portugalList[0].type}</h5>
                        <ul class="list-group">{this.ListUI(portugalList)}</ul>
                      </>
                    )}
                  </div>
                  <div>
                    {nicaraguaList.length === 0 ? (
                      void 0
                    ) : (
                      <>
                        <h5>{nicaraguaList[0].type}</h5>
                        <ul class="list-group">{this.ListUI(nicaraguaList)}</ul>
                      </>
                    )}
                  </div>
                  <div>
                    {islandsList.length === 0 ? (
                      void 0
                    ) : (
                      <>
                        <h5>{islandsList[0].type}</h5>
                        <ul class="list-group">{this.ListUI(islandsList)}</ul>
                      </>
                    )}
                  </div>

                  {tasks.length === 0 ? <p>No Value Selected </p> : void 0}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
