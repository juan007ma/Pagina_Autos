function obtenerdat(){
    var mar = documet.getElementById("marca").value
    var mod = documet.getElementById("modelo").value
    var pla = documet.getElementById("placas").value
    var año = documet.getElementById("año").value
    
    var dat = [mar, mod, pla, año]
    return dat
    }
    
    datos = obtenerdat()
    
    documet.write("sus datos introducidos son los siguientes \n"
    + datos + "marca \n"
    + datos + "modelo \n"
    + datos + "placas \n"
    + datos + "año \n"
    ); 
    
    