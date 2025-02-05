-- Use the AccuSim database
CREATE DATABASE IF NOT EXISTS accusim_db;
USE accusim_db;

-- Drop and recreate users table if needed
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(15) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_verified BOOLEAN DEFAULT FALSE, -- Email/phone verification status
    account_number VARCHAR(20) UNIQUE, -- Auto-generated banking account number
    ssn_last4 CHAR(4), -- Last 4 digits of SSN for identity verification
    date_of_birth DATE, -- Required for account creation
    address TEXT -- User's address for account records
);

-- Insert a test user (Password should be hashed in production)
INSERT INTO users (username, email, phone, password_hash, ssn_last4, date_of_birth, address, account_number) 
VALUES ('testuser', 'test@example.com', '123-456-7890', 'hashed_password_here', '1234', '2000-01-01', '123 Main St, City, State', '1000000001');



