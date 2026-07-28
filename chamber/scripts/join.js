const timestamp = document.querySelector("#timestamp");

timestamp.value = new Date();



function openModal(id){

const modal = document.querySelector(`#${id}`);

modal.showModal();

}



function closeModal(id){

const modal = document.querySelector(`#${id}`);

modal.close();

}