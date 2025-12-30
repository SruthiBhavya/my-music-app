import blindingLightsImage from "../assets/blinding_lights.png";
import shapeOfYouImage from "../assets/shape_of_you.png";
import levitatingImage from "../assets/levitating.png";
import smellsLikeTeenSpiritImage from "../assets/smells_like_teen_spirit.png";
import bohemianRhapsodyImage from "../assets/bohemian_rhapsody.png";
import sickoMode from "../assets/sicko_mode.png";
import godsPlan from "../assets/gods_plan.png";
import humbleImage from "../assets/humble.png";
import animalsImage from "../assets/animals.png";
import titaniumImage from "../assets/titanium.png";
import closerImage from "../assets/closer.png";
import watermelonSugarImage from "../assets/watermelon_sugar.png";
import hotelCaliforniaImage from "../assets/hotel_california.png";
import starboyImage from "../assets/starboy.png";
import loseYourselfImage from "../assets/lose_yourself.png";

export const getSongs = async () => {
  return [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      genre: "Pop",
      image: blindingLightsImage,
    },
    {
      id: 2,
      title: "Shape of You",
      artist: "Ed Sheeran",
      genre: "Pop",
      image: shapeOfYouImage,
    },
    {
      id: 3,
      title: "Levitating",
      artist: "Dua Lipa",
      genre: "Pop",
      image: levitatingImage,
    },
    {
      id: 4,
      title: "Smells Like Teen Spirit",
      artist: "Nirvana",
      genre: "Rock",
      image: smellsLikeTeenSpiritImage,
    },
    {
      id: 5,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      genre: "Rock",
      image: bohemianRhapsodyImage,
    },
    {
      id: 6,
      title: "Sicko Mode",
      artist: "Travis Scott",
      genre: "Hip-Hop",
      image: sickoMode,
    },
    {
      id: 7,
      title: "God's Plan",
      artist: "Drake",
      genre: "Hip-Hop",
      image: godsPlan,
    },
    {
      id: 8,
      title: "HUMBLE.",
      artist: "Kendrick Lamar",
      genre: "Hip-Hop",
      image: humbleImage,
    },
    {
      id: 9,
      title: "Animals",
      artist: "Martin Garrix",
      genre: "Electronic",
      image: animalsImage,
    },
    {
      id: 10,
      title: "Titanium",
      artist: "David Guetta",
      genre: "Electronic",
      image: titaniumImage,
    },
    {
      id: 11,
      title: "Closer",
      artist: "The Chainsmokers",
      genre: "Electronic",
      image: closerImage,
    },
    {
      id: 12,
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      genre: "Pop",
      image: watermelonSugarImage,
    },
    {
      id: 13,
      title: "Hotel California",
      artist: "Eagles",
      genre: "Rock",
      image: hotelCaliforniaImage,
    },
    {
      id: 14,
      title: "Starboy",
      artist: "The Weeknd",
      genre: "Pop",
      image: starboyImage,
    },
    {
      id: 15,
      title: "Lose Yourself",
      artist: "Eminem",
      genre: "Hip-Hop",
      image: loseYourselfImage,
    },
  ];
};