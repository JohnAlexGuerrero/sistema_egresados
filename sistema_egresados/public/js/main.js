document.querySelectorAll('.addStudy').forEach((btnElement)=>{
    btnElement.addEventListener('click', addStudyForm)
})

document.querySelectorAll('.addFamily').forEach((btnElement)=>{
    btnElement.addEventListener('click', addFamilyForm)
})





function addStudyForm() {
    const formulario = document.getElementById('tableID')
    const inpuTr = document.createElement('tr')

    inpuTr.innerHTML = `
                    <td><input type="text" class="td-input" name="title" required autocomplete="off" onKeyup="inputUpperCase(this)"></td>
                    <td><input type="text" class="td-input" value="UNIVERSIDAD CESMAG" onKeyup="inputUpperCase(this)" name="institute" required></td>
                    <td>
                        <select  name="level" required class="td-input">
                            <option value="0">Seleccione</option>
                            <option value="PREGRADO">Pregrado</option>
                            <option value="TECNICO">Técnico</option>
                            <option value="CURSO LIBRE">Curso Libre</option>
                            <option value="DIPLOMADO">Diplomado</option>
                            <option value="POSTGRADO">Postgrado</option>
                            <option value="ESPECIALIZACION">Especialización</option>
                            <option value="MAESTRIA">Maestria</option>
                            <option value="DOCTORADO">Doctorado</option>
                    </select>
                    </td>
                    <td><input type="date" name="graduation" class="td-input" autocomple="off" required></td>
                    <td>
                        <button class="" type="submit" id="btnSave" >
                            <span class="ti-save"></span>
                            <small>Adicionar</small>
                        </button>
                    </td>
        `
    formulario.appendChild(inpuTr)


};


function addFamilyForm() {
    const tableFamily = document.getElementById('tableFamily')
    const formulario = document.createElement('tr')

    formulario.innerHTML = `
        <td><input type="text" class="td-input" name="document"  onkeypress='return validateNumber(event)' required autocomplete="off" ></td>
        <td><input type="text" class="td-input"  onKeyup="inputUpperCase(this)" name="name" required></td>
        <td><input type="date" name="birthday" class="td-input" autocomple="off" required></td>
        <td><input type="text" class="td-input" name="age"  onkeypress='return validateNumber(event)' required autocomplete="off" ></td>
        <td><input type="text" class="td-input"  onKeyup="inputUpperCase(this)" name="parentese" required></td>
        <td><input type="text" name="occupation" class="td-input" autocomple="off" required></td>
        <td>
            <button class="btn btn-primary" type="submit" id="btnSave" >
                <span class="ti-save"></span>
                <small>Adicionar</small>
            </button>
        </td>
    `

    tableFamily.appendChild(formulario)  
} 

function inputUpperCase(e) {
    e.value = e.value.toUpperCase();
}

function validateNumber(event) {
    if (event.charCode >= 48 && event.charCode <= 57) {
        return true;
    }
    return false;
}
