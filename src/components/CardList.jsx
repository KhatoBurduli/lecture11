import Card from "./Card"
import aragornImage from "../assets/aragorn.webp"
import gandalfImage from "../assets/gandalf.webp"
import gimliImage from "../assets/gimli.webp"
import legolasImage from "../assets/legolas.webp"

const data = [
    {id: 1, name: "Legolas", image: legolasImage},
    {id: 2, name: "Aragorn", image: aragornImage},
    {id: 3, name: "Gimli", image: gimliImage},
    {id: 4, name: "Gandalf", image: gandalfImage}

]

const CardList = () => {

    function action(name){
        alert(`this is an action by ${name}`)
    }

  return (
    <div className="card-list">

        {data.map((card) => <Card key={card.id} name={card.name} image={card.image} action={action} />)}


        {/* <Card name="Legolas" image={legolasImage} action={action}/>
        <Card name="Aragorn" image={aragornImage} action={action}/>
        <Card name="Gimli" image={gimliImage} action={action}/>
        <Card name="Gandalf" image={gandalfImage} action={action}/> */}
    </div>
  )
}

export default CardList