import React, { useState } from 'react';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      comment: "Great product! Highly recommend it.",
      rating: 4
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "Amazing quality and fast shipping!",
      rating: 5
    },
    {
      id: 3,
      name: "Alice Johnson",
      comment: "Good value for the price.",
      rating: 3
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    comment: '',
    rating: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setNewReview((prevReview) => ({
      ...prevReview,
      rating
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewToAdd = {
      ...newReview,
      id: reviews.length + 1
    };
    setReviews((prevReviews) => [...prevReviews, reviewToAdd]);
    setNewReview({ name: '', comment: '', rating: 0 });
  };

  return (
    <div className="container mx-auto text-white bg-black">
      {/* <h1 className="text-2xl font-bold mb-4">Product Reviews</h1> */}
      <form onSubmit={handleSubmit} className="mb-2 border-b- rounded-lg shadow-md px-10">
        <h2 className="text-xl font-semibold mb-2 text-center">Add a Review</h2>
        {/* <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newReview.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div> */}
        <div className="flex flex-col md:flex-row md:space-x-4 mb-2">
            <div className="w-full md:w-3/4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="comment">Comment</label>
                <textarea
                    id="comment"
                    name="comment"
                    value={newReview.comment}
                    onChange={handleChange}
                    className="w-full h-24 px-3 py-2 bg-gray-900 text-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
                    placeholder="Write your review here..."
                    required
                />
            </div>
            <div className="w-full md:w-1/6 mb-4 md:mb-0">
                <label className="block text-gray-700 font-semibold mb-2">Rating</label>
                <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                        key={star}
                        onClick={() => handleRatingChange(star)}
                        className={`w-6 h-6 cursor-pointer ${star <= newReview.rating ? 'text-yellow-500' : 'text-gray-400'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M9.049.386a.75.75 0 011.902 0l2.262 6.96h7.305a.75.75 0 01.444 1.346l-5.916 4.3 2.262 6.96a.75.75 0 01-1.154.804L10 15.347l-5.142 3.61a.75.75 0 01-1.154-.804l2.262-6.96-5.916-4.3a.75.75 0 01.444-1.346h7.305L9.049.386z" />
                    </svg>
                    ))}
                </div>
            </div>
            
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300">
            Submit
        </button>
      </form>
      <div className="px-8">
        {reviews.map((review) => (
          <div key={review.id} className="px-2 pb-4 border-b border-gray-900">
            <h2 className="text-xl font-semibold">{review.name}</h2>
            <div className="flex items-center mb-2">
              {[...Array(review.rating)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.54L.489 7.41l6.56-.953L10 1l2.95 5.457 6.56.953-4.755 4.14 1.122 6.54z"/></svg>
              ))}
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
