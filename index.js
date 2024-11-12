$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var modal = $("#modal");
    var closeModal = $("#close-modal");
  
    envelope.click(function() {
      open();
    });
  
    btn_open.click(function() {
      open();
    });
  
    btn_reset.click(function() {
      close();
    });
  
    closeModal.click(function() {
      modal.fadeOut();
    });
  
    function open() {
      envelope.addClass("open").removeClass("close");
      modal.fadeIn();  // Mostra o modal quando o envelope é aberto
    }
  
    function close() {
      envelope.addClass("close").removeClass("open");
      modal.fadeOut();  // Fecha o modal quando o botão reset é clicado
    }
  });
  