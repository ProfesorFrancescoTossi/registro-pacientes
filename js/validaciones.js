$(document).ready(function () {
    $('#registroForm').on('submit', function (e) {
      e.preventDefault();
  
      const correo = $('#correo').val();
      const regexCorreo = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      const sexo = $('#sexo').val();
      const dia = parseInt($('#dia').val());
      const mes = parseInt($('#mes').val());
      const anio = parseInt($('#anio').val());
  
      if (!regexCorreo.test(correo)) {
        alert('El correo no tiene un formato válido.');
        return;
      }
      if (!['M', 'F'].includes(sexo)) {
        alert('El sexo debe ser M o F');
        return;
      }
      if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || anio < 1900 || anio > 2023) {
        alert('La fecha de nacimiento no es válida');
        return;
      }
  
      alert('Formulario enviado correctamente ✅');
    });
  });
  
  