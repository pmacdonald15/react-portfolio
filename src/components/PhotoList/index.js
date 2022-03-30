import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Price Mart',
      category: 'Front-End',
      description:
        'This web application allows users to search for products and see the prices that both Walmart and Target offer. They then can add it to a shopping cart, also it will display the nearest store to you. This makes finding the cheapest price easier for the user.'
    },
    /*{
      name: '',
      category: 'Front-End',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },*/
    {
      name: 'Words Are Hard',
      category: 'Node',
      description:
      'This web application allows users to create and account and proceed to post memes into a feed amongst other users as a form of communication.'
    },
    /*{
      name: 'Cat green eyes',
      category: 'Node',
      description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },*/
    {
      name: 'Rare Obstensibly Exotic Creatures',
      category: 'Full-Stack MERN',
      description:
        'This website displays a modern MERN E-Commerce based application. This specific website allows users to browse "Exotic Creatures" as a sellable product. From there the user can add it to their online cart and proceed to check out using Strip Integration, or the user can remove the products from their cart if need be.'
    },
    /*{
      name: 'Restaurant table',
      category: 'Full-Stack MERN',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Green parrot',
      category: 'portraits',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },*/
   
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
