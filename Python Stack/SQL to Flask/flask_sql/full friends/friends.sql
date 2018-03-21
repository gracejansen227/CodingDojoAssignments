SELECT U1.first_name, U1.last_name, U2.first_name, U2.last_name
FROM users as U1 
JOIN friendships AS f ON f.user_id = U1.user_id
JOIN users as U2 ON U2.user_id = f.friend_id;