
function ButtonSort({data}) {

    data.sort(function (a, b){
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          } 
          return 0;
        });
  return (
    <button>ordena los personajes alfabéticamente</button>
  )
}

export default ButtonSort