import "./App.css";
function Page(props) {
    return (
        <div className={props.selected ? "page selected" : "page"} id={props.id}>
            {props.children}
        </div>
    );
}

function VitruvianManfacturing(props) {
    return (
        <Page selected={props.selected} className="page" id="vitruvian-manfacturing">
            <br></br>                
            <div className="colummtest">
                <div className="box">
                    <div className="boxhalf2">
                        Delete
                    </div>
                    <br></br>
                    <br></br>
                    <div className="boxx">
                        Name: 
                        </div>
                        <br></br>
                        <br></br>
                        <div className="boxx">
                        File Upload:
                    </div>
                    <br></br>
                    <br></br>
                    <h2>About the Part:</h2>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="boxx">
                        Quantity:
                    </div>
                    
                </div>
            </div>

            <div className="colummtest">
                <div className="box2">
                    <div className="boxhalf">
                        Material
                    </div>
                    <br></br>
                    <input type="checkbox" id="polycarbonate" name="polycarbonate" />
                    <label for="polycarbonate">Polycarbonate</label>
                    <br></br>
                    <input type="checkbox" id="alumium" name="alumiun" />
                    <label for="alumium">Aluminum</label>
                    <br></br>
                    <input type="checkbox" id="steel" name="steel" />
                    <label for="steel">Steel</label>
                    <br></br>
                    <input type="checkbox" id="acrylic" name="acrylic" />
                    <label for="acrylic">Acrylic</label>
                    <br></br>
                    <input type="checkbox" id="PLA" name="PLA" />
                    <label for="PLA">PLA</label>
                    <br></br>
                    <input type="checkbox" id="PETG" name="PETG" />
                    <label for="PETG">PETG</label>
                    <br></br>
                    <input type="checkbox" id="Onyx" name="Onyx" />
                    <label for="Onyx">Onyx</label>
                    <br></br>
                </div>

            </div>

            <div className="colummtest">
                <div className="box3">
                    <div className="boxhalf">
                        Stock
                    </div>
                    <br></br>
                    <input type="checkbox" id="plate" name="plate" />
                    <label for="plate">Plate</label>
                    <br></br>
                    <input type="checkbox" id="extrusion" name="extrusion" />
                    <label for="extrusion">Extrusion</label>
                    <br></br>
                    <input type="checkbox" id="hexShaft" name="hexShaft" />
                    <label for="hexShaft">Hex Shaft</label>
                    <br></br>
                    <input type="checkbox" id="shaft" name="shaft" />
                    <label for="shaft">Shaft</label>
                    <br></br>
                    <input type="checkbox" id="angle" name="angke" />
                    <label for="angle">Angle</label>
                    <br></br>
                    <input type="checkbox" id="filament" name="filament" />
                    <label for="filament">Filament</label>
                    <br></br>
                    <br></br>
                </div>
                <br></br>
                <br></br>
                <input type="submit" value="Submit" />
            </div>

            <div className="colummtest">
                <div className="box4">
                    <div className="boxhalf">
                        Thickness
                    </div>
                    <br></br>
                    <input type="checkbox" id="0.00625" name="0.00625" />
                    <label for="0.00625">0.00625"</label>
                    <br></br>
                    <input type="checkbox" id="0.09" name="0.09" />
                    <label for="0.09">0.09"</label>
                    <br></br>
                    <input type="checkbox" id="0.125" name="0.125" />
                    <label for="0.125">0.125"</label>
                    <br></br>
                    <input type="checkbox" id="0.2" name="0.2" />
                    <label for="0.2">0.2"</label>
                    <br></br>
                    <input type="checkbox" id="0.25" name="0.25" />
                    <label for="0.25">0.25"</label>
                    <br></br>
                    <input type="checkbox" id="0.375" name="0.375" />
                    <label for="0.375">0.375"</label>
                    <br></br>
                    <input type="checkbox" id="0.5" name="0.5" />
                    <label for="0.5">0.35"</label>
                    <br></br>
                    <input type="checkbox" id="N/A" name="N/A" />
                    <label for="N/A">N/A</label>
                    <br></br>
                </div>
            </div>
        </Page>
    );
}

function DropDragBX(props){
    <Page>
        
         <title>Drag and Drop File Upload</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta charset="utf-8"/>
  <link rel="shortcut icon" href="/assets/favicon.ico"/>
  <link rel="stylesheet" href="./src/main.css"/>

<body>
  <div class="drop-zone">
    <span class="drop-zone__prompt">Drop file here or click to upload</span>
    <input type="file" name="myFile" class="drop-zone__input"/>
  </div>

  <script src="./src/main.js"></script>
</body>
    </Page>
}

        

                export {VitruvianManfacturing, DropDragBX};