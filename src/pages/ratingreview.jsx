import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaStar } from 'react-icons/fa';
import { Button } from '@chakra-ui/react';

const initialValues = {
  rating: 0,
  review: '',
};

const validationSchema = Yup.object({
  rating: Yup.number()
    .min(1, 'Select a rating')
    .max(5, 'Select a rating')
    .required('Rating is required'),
  review: Yup.string()
    .trim()
    .max(100, 'max 100 character')
    .required('Review is required'),
});

const RatingAndReviewPage = () => {
  const [reviewsList, setReviewsList] = useState([1, 2, 3, 4, 5]);

  const handleFormSubmit = (values, { resetForm }) => {
    console.log('Form values:', values);
    const newReview = { rating: values.rating, review: values.review };
    setReviewsList([...reviewsList, newReview]);
    resetForm();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <h1>Rating and Review </h1>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div>
                  <label>Rating:</label>
                  <div style={{ display: 'flex' }}>
                    {[1, 2, 3, 4, 5].map((ratingValue) => (
                      <FaStar
                        key={ratingValue}
                        onClick={() => setFieldValue('rating', ratingValue)}
                        color={ratingValue <= values.rating ? 'gold' : 'gray'}
                        style={{ cursor: 'pointer' }}
                      />
                    ))}
                  </div>
                  <ErrorMessage
                    name='rating'
                    component='div'
                    className='error'
                  />
                </div>
                <div>
                  <Field
                    as='textarea'
                    className='text-black'
                    name='review'
                    rows='4'
                    cols='50'
                  />
                  <ErrorMessage
                    name='review'
                    component='div'
                    className='error'
                  />
                </div>
                <Button colorScheme='blackAlpha' type='submit'>
                  Button
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        <div>
          <h2>Recent Ratings and Reviews</h2>
          <ul>
            {reviewsList.map((reviewItem, index) => (
              <li key={index}>
                <div>
                  Rating:
                  <div style={{ display: 'flex' }}>
                    {[1, 2, 3, 4, 5].map((ratingValue) => (
                      <FaStar
                        key={ratingValue}
                        color={
                          ratingValue <= reviewItem.rating ? 'gold' : 'gray'
                        }
                      />
                    ))}
                  </div>
                </div>
                <div>{reviewItem.review}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RatingAndReviewPage;
