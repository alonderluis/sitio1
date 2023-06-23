function fnGenerarTabla(res,num,nom,ape,tur,gen)
{
    document.write("<table>");
        document.write("<tr>");
            document.write("<th class='titulo' colspan='4'>Datos personales"+res+"</th>");
        document.write("</tr>");
        document.write("<tr>");
            document.write("<td id='tdIzq'>Nombres:</td>");
            document.write("<td rowspan='4'><img src='img/f"+num+".jpg'></td>");
            document.write("<td id='tdIzq'>Turno:</td>");
        document.write("</tr>");
        document.write("<tr>");
            document.write("</td><td id='tdDer'>"+nom+"</td>")
            document.write("<td id='tdDer'>"+tur+"</td>");
        document.write("</tr>");
        document.write("<tr>");
            document.write("<td id='tdIzq'>Apellidos:</td>")
            document.write("<td id='tdIzq'>Genero:</td>")
        document.write("</tr>");
        document.write("<tr>");
            document.write("</td><td id='tdDer'>"+ape+"</td>");
            document.write("</td><td id='tdDer'>"+gen+"</td>");
        document.write("</tr>")
    document.write("</table> <br>");
}

function fnTurno(turno)
{
    switch(turno)
    {
        case 'M': return "Dia"; break;
        case 'N': return "Noche"; break;
        default: return "???"; break;
    }
}