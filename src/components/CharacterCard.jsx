import PropTypes from "prop-types";

function CharacterCard({info}) {

    const characterImage = (info)=> {
        let imgUrl = "";
        if(info.image) {
            imgUrl = info.image;
        } else {
            imgUrl = "https://placehold.co/200x300";
        }

        return imgUrl;
    }

    const imageAltText = (info) => {
        let altText = "";
        if(info.image) {
            altText = info.name;
        } else {
            altText = "Image not available";
        }

        return altText;
    }

  return (
    <article>
        <img src={characterImage(info)} alt={imageAltText(info)} />
        <h3>{info.name}</h3>
        <p>{info.species}</p>
    </article>
  )
}

export default CharacterCard;

CharacterCard.propTypes = {
  info: PropTypes.object,
}