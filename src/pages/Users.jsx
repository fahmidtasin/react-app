import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [editingId, setEditingId] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:8000/api/users');
    setUsers(res.data);
  };

  useEffect(() => { fetchUsers() }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`http://localhost:8000/api/users/${editingId}`, form);
    } else {
      await axios.post('http://localhost:8000/api/users', form);
    }
    setForm({ name: '', email: '', password: '' });
    setEditingId(null);
    fetchUsers();
  };

  const handleEdit = user => { setForm({ name: user.name, email: user.email, password: user.password }); setEditingId(user.id); }
  const handleDelete = async id => { await axios.delete(`http://localhost:8000/api/users/${id}`); fetchUsers(); }

  return (
    <div className="login-container">
      <h2>{editingId ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">{editingId ? 'Update' : 'Add'}</button>
      </form>
      <hr />
      <h3>Users</h3>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name} ({u.email}) 
            <button onClick={() => handleEdit(u)}>Edit</button>
            <button onClick={() => handleDelete(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
