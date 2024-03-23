function Todo1(){
    let toDoName = "Buy Milk";
    let Date = "04/01/2024";
return(
    <div class="container text-center">
    <div class="row">
    <div class="col-4 item-name">{toDoName}</div>
      <div class="col-4 date">{Date}</div>
      <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
    </div>
  </div>
)
}
export default Todo1;