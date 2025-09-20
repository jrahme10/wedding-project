-- Create database
CREATE DATABASE WeddingVendorsDb;
GO

USE WeddingVendorsDb;
GO

-- Create VendorCategories table
CREATE TABLE VendorCategories (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Description NVARCHAR(500)
);
GO

-- Create Vendors table
CREATE TABLE Vendors (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(200) NOT NULL,
    Category NVARCHAR(100) NOT NULL,
    Description NVARCHAR(MAX),
    ContactPerson NVARCHAR(100),
    Email NVARCHAR(255),
    Phone NVARCHAR(20),
    Address NVARCHAR(500),
    Price DECIMAL(18,2),
    ImageUrl NVARCHAR(500),
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    UpdatedAt DATETIME2 NULL
);
GO

-- Insert sample categories
INSERT INTO VendorCategories (Name, Description) VALUES 
('Venue', 'Wedding venues and locations'),
('Catering', 'Food and beverage services'),
('Photography', 'Wedding photographers and videographers'),
('Florist', 'Flower arrangements and decorations'),
('Music', 'Bands, DJs, and entertainment'),
('Dress', 'Wedding dresses and attire'),
('Transportation', 'Wedding cars and transportation'),
('Cake', 'Wedding cakes and desserts'),
('Church', 'Religious ceremony locations');
GO

-- Insert sample vendors
INSERT INTO Vendors (Name, Category, Description, ContactPerson, Email, Phone, Address, Price, ImageUrl) VALUES
('Sunset Gardens', 'Venue', 'Beautiful outdoor garden venue with panoramic views', 'John Smith', 'info@sunsetgardens.com', '(555) 123-4567', '123 Romance Lane, Napa Valley, CA', 5000.00, '/images/venues/sunset-gardens.jpg'),
('Elegant Catering Co.', 'Catering', 'Gourmet catering with customizable menus', 'Sarah Johnson', 'sarah@elegantcatering.com', '(555) 234-5678', '456 Culinary Blvd, San Francisco, CA', 2500.00, '/images/catering/elegant-catering.jpg'),
('Capture Moments Photography', 'Photography', 'Professional wedding photography and videography', 'Michael Brown', 'michael@capturemoments.com', '(555) 345-6789', '789 Camera St, Los Angeles, CA', 1800.00, '/images/photography/capture-moments.jpg'),
('Blooming Beauties Florist', 'Florist', 'Custom floral arrangements and bouquets', 'Emily Davis', 'emily@bloomingbeauties.com', '(555) 456-7890', '101 Flower Ave, San Diego, CA', 1200.00, '/images/florist/blooming-beauties.jpg'),
('Harmony Strings Quartet', 'Music', 'Elegant string quartet for ceremonies', 'Robert Wilson', 'robert@harmonystrings.com', '(555) 567-8901', '202 Music Lane, Seattle, WA', 800.00, '/images/music/harmony-strings.jpg'),
('Bridal Elegance Boutique', 'Dress', 'Designer wedding dresses and alterations', 'Lisa Anderson', 'lisa@bridalelegance.com', '(555) 678-9012', '303 Bridal Way, Miami, FL', 2000.00, '/images/dresses/bridal-elegance.jpg'),
('Luxury Limousines', 'Transportation', 'Vintage and luxury wedding car rentals', 'David Taylor', 'david@luxurylimos.com', '(555) 789-0123', '404 Wheels Dr, Chicago, IL', 600.00, '/images/transportation/luxury-limos.jpg'),
('Sweet Celebrations Bakery', 'Cake', 'Custom wedding cakes and desserts', 'Jennifer Martinez', 'jennifer@sweetcelebrations.com', '(555) 890-1234', '505 Sugar St, Austin, TX', 500.00, '/images/cakes/sweet-celebrations.jpg'),
('St. Mary Cathedral', 'Church', 'Historic cathedral for religious ceremonies', 'Father Thomas', 'office@stmarycathedral.org', '(555) 901-2345', '606 Sacred Rd, Boston, MA', 1000.00, '/images/churches/st-mary.jpg');
GO