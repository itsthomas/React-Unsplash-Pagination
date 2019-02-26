import React from "react";
// import ScrollAnimation from "react-animate-on-scroll";

// const imagesLoadedOptions = { background: ".my-bg-image-el" };

// class ListItem extends Component {
//   render() {
//     console.log(this.props);
//     // map method generates a new Array
//     const childElements = this.props.images.map(item => {
//       return (
//         <ScrollAnimation
//           animateIn="rollIn" // Use any animation from https://daneden.github.io/animate.css/
//           animateOut=""
//           offset="200"
//           duration="2"
//           animateOnce="true"
//           className="masonry_item"
//           key={item.id}
//         >
//           <img
//             src={item.urls.regular}
//             alt={item.description}
//             className="masonry_item_img"
//           />
//         </ScrollAnimation>
//       );
//     });

//     return (
//         {childElements}
//     );
//   }
// }

const ListItem = ({ photo }) => {
  return (
    <div key={photo.id} className="grid__item card">
      <div className="card__body">
        <img src={photo.urls.small} alt="" />
      </div>
      <div className="card__footer media">
        <img
          src={photo.user.profile_image.small}
          alt=""
          className="media__obj"
        />
        <div className="media__body">
          <a
            href={photo.user.portfolio_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {photo.user.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
