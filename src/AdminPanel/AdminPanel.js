import React, { useState, useEffect } from 'react';
import './AdminPanel.css';
import { useNavigate } from 'react-router-dom';
const AdminPanel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      navigate('/admin-login', { replace: true });
    }
  }, [navigate]);
  const [foods, setFoods] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  
  useEffect(() => {
    fetch('http://localhost:5000/foods')
      .then((response) => response.json())
      .then((data) => setFoods(data))
      .catch((error) => {
        console.error('There was an error fetching the foods!', error);
      });
  }, []);

  const deleteFood = (id) => {
    fetch(`http://localhost:5000/foods/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setFoods((prevFoods) => prevFoods.filter((food) => food.id !== id));
        } else {
          console.error('Failed to delete the food.');
        }
      })
      .catch((error) => {
        console.error('There was an error deleting the food!', error);
      });
  };
  const handleEditClick = (food) => {
    setSelectedFood(food);
    setIsEditMode(true);
  };
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setSelectedFood((prevFood) => ({
      ...prevFood,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedFood((prevFood) => ({
      ...prevFood,
      [name]: checked,
    }));
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/foods/${selectedFood.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedFood),
    })
      .then((response) => {
        if (response.ok) {
          setFoods((prevFoods) =>
            prevFoods.map((food) =>
              food.id === selectedFood.id ? selectedFood : food
            )
          );
          setIsEditMode(false);
          setSelectedFood(null);
        } else {
          console.error('Failed to update the food.');
        }
      })
      .catch((error) => {
        console.error('There was an error updating the food!', error);
      });
  };

  const handleCancelClick = () => {
    setIsEditMode(false);
    setSelectedFood(null);
  };
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('authToken');
    navigate('/admin-login', { replace: true });
  };
  const styles = {
    container: {
      position: 'fixed',
      bottom: '15px',
      right: '15px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: 'red',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div className="admin-panel">
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Promo</th>
            <th>Sale</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{food.description}</td>
              <td>{food.price}</td>
              <td>{food.promo ? 'Yes' : 'No'}</td>
              <td>{food.sale ? 'Yes' : 'No'}</td>
              <td style={{ textAlign: 'center' }}>
                <button onClick={() => deleteFood(food.id)} style={{ background: 'none', border: 'none' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </button>
              </td>
              <td>
                <button onClick={() => handleEditClick(food)} style={{ background: 'none', border: 'none' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                    <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditMode && selectedFood && (
        <div className="edit-form">
          <h2>Edit Food Item</h2>
          <form onSubmit={handleFormSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={selectedFood.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={selectedFood.description}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={selectedFood.price}
                onChange={handleInputChange}
                required
              />
    </label>
            <label>
              Promo:
              <input
                type="checkbox"
                name="promo"
                checked={selectedFood.promo}
                onChange={handleCheckboxChange}
              />
            </label>
            <label>
              Sale:
              <input
                type="checkbox"
                name="sale"
                checked={selectedFood.sale}
                onChange={handleCheckboxChange}
              />
            </label>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancelClick}>
            Cancel
            </button>
          </form>
        </div>
      )}
      <div style={styles.container}>
      <form onSubmit={handleLogout}>
        <button type="submit" style={styles.button}>
          Logout
        </button>
      </form>
    </div>
    </div>
  );
};

export default AdminPanel;