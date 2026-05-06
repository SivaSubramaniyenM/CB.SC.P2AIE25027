
const express = require('express');
const app = express();
app.use(express.json());

let notifications = [];

app.get('/notifications', (req, res) => {
    res.json({ notifications });
});

app.post('/notifications', (req, res) => {
    const notif = { id: Date.now(), ...req.body };
    notifications.push(notif);
    res.json(notif);
});

app.post('/notifications/read/:id', (req, res) => {
    notifications = notifications.map(n =>
        n.id == req.params.id ? { ...n, read: true } : n
    );
    res.json({ success: true });
});

app.listen(5000, () => console.log("Server running on 5000"));
