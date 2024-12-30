# 🎯 Question A

## 📝 Instructions
Create a database named `university_db` and insert the data for courses and faculty collections provided below. Write MongoDB queries for the following operations:

```javascript

// courses collection
[
    {
        "courseId": "CS101",
        "title": "Introduction to Programming",
        "department": "Computer Science",
        "credits": 4,
        "semester": "Fall 2024",
        "enrollmentLimit": 60,
        "currentEnrollment": 45,
        "instructor": "PROF001",
        "schedule": {
            "days": ["Monday", "Wednesday"],
            "time": "10:00-11:30",
            "room": "Tech-201"
        },
        "prerequisites": [],
        "isActive": true,
        "materials": ["textbook", "slides", "code samples"],
        "languages": ["Python", "JavaScript"]
    },
    {
        "courseId": "CS201",
        "title": "Data Structures",
        "department": "Computer Science",
        "credits": 4,
        "semester": "Fall 2024",
        "enrollmentLimit": 55,
        "currentEnrollment": 52,
        "instructor": "PROF002",
        "schedule": {
            "days": ["Tuesday", "Thursday"],
            "time": "14:00-15:30",
            "room": "Tech-305"
        },
        "prerequisites": ["CS101"],
        "isActive": true,
        "materials": ["textbook", "practice problems"],
        "languages": ["Java", "Python"]
    },
    {
        "courseId": "CS301",
        "title": "Database Systems",
        "department": "Computer Science",
        "credits": 3,
        "semester": "Fall 2024",
        "enrollmentLimit": 45,
        "currentEnrollment": 30,
        "instructor": "PROF003",
        "schedule": {
            "days": ["Monday", "Wednesday"],
            "time": "13:00-14:30",
            "room": "Tech-103"
        },
        "prerequisites": ["CS201"],
        "isActive": true,
        "materials": ["textbook", "slides", "case studies"],
        "languages": ["SQL", "MongoDB"]
    },
    {
        "courseId": "MATH201",
        "title": "Calculus I",
        "department": "Mathematics",
        "credits": 4,
        "semester": "Fall 2024",
        "enrollmentLimit": 70,
        "currentEnrollment": 65,
        "instructor": "PROF004",
        "schedule": {
            "days": ["Monday", "Wednesday", "Friday"],
            "time": "09:00-10:00",
            "room": "Math-101"
        },
        "prerequisites": [],
        "isActive": true,
        "materials": ["textbook", "problem sets"]
    },
    {
        "courseId": "CS401",
        "title": "Artificial Intelligence",
        "department": "Computer Science",
        "credits": 3,
        "semester": "Fall 2024",
        "enrollmentLimit": 40,
        "currentEnrollment": 25,
        "instructor": "PROF001",
        "schedule": {
            "days": ["Tuesday", "Thursday"],
            "time": "15:30-17:00",
            "room": "Tech-401"
        },
        "prerequisites": ["CS201", "MATH201"],
        "isActive": true,
        "materials": ["slides", "research papers"],
        "languages": ["Python", "R"]
    },
    {
        "courseId": "CS102",
        "title": "Web Development",
        "department": "Computer Science",
        "credits": 3,
        "semester": "Fall 2024",
        "enrollmentLimit": 50,
        "currentEnrollment": 35,
        "instructor": "PROF006",
        "schedule": {
            "days": ["Monday", "Wednesday"],
            "time": "15:00-16:30",
            "room": "Tech-202"
        },
        "prerequisites": ["CS101"],
        "isActive": true,
        "materials": ["slides", "code samples"],
        "languages": ["HTML", "CSS", "JavaScript"]
    },
    {
        "courseId": "CS501",
        "title": "Advanced Programming",
        "department": "Computer Science",
        "credits": 4,
        "semester": "Spring 2024",
        "enrollmentLimit": 30,
        "currentEnrollment": 0,
        "instructor": "PROF002",
        "schedule": {
            "days": ["Monday", "Wednesday"],
            "time": "14:00-15:30",
            "room": "Tech-301"
        },
        "prerequisites": ["CS201"],
        "isActive": false,
        "materials": ["textbook", "project materials"],
        "languages": ["C++", "Python"]
    },
    {
        "courseId": "CS601",
        "title": "Machine Learning",
        "department": "Computer Science",
        "credits": 4,
        "semester": "Fall 2024",
        "enrollmentLimit": 35,
        "currentEnrollment": 33,
        "instructor": "PROF001",
        "schedule": {
            "days": ["Tuesday", "Thursday"],
            "time": "13:00-14:30",
            "room": "Tech-401"
        },
        "prerequisites": ["CS401", "MATH201"],
        "isActive": true,
        "materials": ["research papers", "project materials", "slides"],
        "languages": ["Python", "R"]
    }
]

// faculty collection
[
    {
        "facultyId": "PROF001",
        "name": "Dr. Robert Smith",
        "department": "Computer Science",
        "position": "Associate Professor",
        "email": "robert@university.edu",
        "officeHours": {
            "day": "Tuesday",
            "time": "14:00-16:00",
            "location": "Faculty Wing-A102"
        },
        "coursesTeaching": ["CS101", "CS401", "CS601"],
        "researchAreas": ["AI", "Machine Learning"],
        "joinDate": "2020-08-15",
        "isActive": true
    },
    {
        "facultyId": "PROF002",
        "name": "Dr. Sarah Johnson",
        "department": "Computer Science",
        "position": "Professor",
        "email": "sarah@university.edu",
        "officeHours": {
            "day": "Wednesday",
            "time": "10:00-12:00",
            "location": "Faculty Wing-A103"
        },
        "coursesTeaching": ["CS201", "CS501"],
        "researchAreas": ["Algorithms", "Data Structures"],
        "joinDate": "2015-08-15",
        "isActive": true
    },
    {
        "facultyId": "PROF003",
        "name": "Dr. Michael Chen",
        "department": "Computer Science",
        "position": "Assistant Professor",
        "email": "michael@university.edu",
        "officeHours": {
            "day": "Thursday",
            "time": "13:00-15:00",
            "location": "Faculty Wing-A104"
        },
        "coursesTeaching": ["CS301"],
        "researchAreas": ["Database Systems", "Data Mining"],
        "joinDate": "2021-08-15",
        "isActive": true
    },
    {
        "facultyId": "PROF004",
        "name": "Dr. Emily Brown",
        "department": "Mathematics",
        "position": "Professor",
        "email": "emily@university.edu",
        "officeHours": {
            "day": "Monday",
            "time": "11:00-13:00",
            "location": "Math Wing-B101"
        },
        "coursesTeaching": ["MATH201"],
        "researchAreas": ["Calculus", "Linear Algebra"],
        "joinDate": "2010-08-15",
        "isActive": true
    },
    {
        "facultyId": "PROF006",
        "name": "Dr. Lisa Anderson",
        "department": "Computer Science",
        "position": "Assistant Professor",
        "email": "lisa@university.edu",
        "officeHours": {
            "day": "Tuesday",
            "time": "11:00-13:00",
            "location": "Faculty Wing-A105"
        },
        "coursesTeaching": ["CS102"],
        "researchAreas": ["Web Technologies", "UI/UX"],
        "joinDate": "2022-08-15",
        "isActive": true
    },
    {
        "facultyId": "PROF007",
        "name": "Dr. David Lee",
        "department": "Computer Science",
        "position": "Professor",
        "email": "davidlee@university.edu",
        "officeHours": {
            "day": "Monday",
            "time": "14:00-16:00",
            "location": "Faculty Wing-A106"
        },
        "coursesTeaching": [],
        "researchAreas": ["Cybersecurity", "Network Systems"],
        "joinDate": "2008-08-15",
        "isActive": false
    }
]

```

1. Find all courses with current enrollment less than 40
2. Find all faculty members who joined before 2020
3. List all courses that teach Python
4. Find courses that have more than 3 credits
5. Find courses scheduled on Monday
6. List faculty members with office hours on Tuesday
7. Find courses in Tech-401 room
8. Find courses that teach both Python and JavaScript
9. List courses with more than 2 prerequisites
10. Find faculty members researching AI or Machine Learning
11. Add a new language to CS101
12. Update office hours for PROF001
13. Increase current enrollment for a specific course
14. Mark a faculty member as inactive
15. Remove all inactive courses
16. Delete courses with zero enrollment
17. Remove specific programming language from a course


---

# 🎯 Question B


## 📝 Instructions
Create a database named `hospital_db` and insert the data for patients and doctors collections provided below. Write MongoDB queries for the following operations:

```javascript
// patients collection
[
    {
        "patientId": "P101",
        "name": "Sarah Williams",
        "age": 45,
        "bloodGroup": "A+",
        "admissionDate": "2024-01-15",
        "status": "Admitted",
        "assignedDoctor": "DOC001",
        "ward": {
            "number": "W101",
            "type": "General",
            "floor": 1,
            "bedNumber": "B1"
        },
        "diagnosis": ["Diabetes", "Hypertension"],
        "medications": ["Insulin", "Lisinopril"],
        "insuranceActive": true,
        "lastCheckup": "2024-12-20"
    },
    {
        "patientId": "P102",
        "name": "John Brown",
        "age": 28,
        "bloodGroup": "O+",
        "admissionDate": "2024-12-01",
        "status": "Discharged",
        "assignedDoctor": "DOC002",
        "ward": {
            "number": "W102",
            "type": "Emergency",
            "floor": 1,
            "bedNumber": "B5"
        },
        "diagnosis": ["Fracture"],
        "medications": ["Painkillers"],
        "insuranceActive": true,
        "lastCheckup": "2024-12-15"
    },
    {
        "patientId": "P103",
        "name": "Emily Davis",
        "age": 62,
        "bloodGroup": "B-",
        "admissionDate": "2024-12-10",
        "status": "Admitted",
        "assignedDoctor": "DOC001",
        "ward": {
            "number": "W103",
            "type": "ICU",
            "floor": 2,
            "bedNumber": "B2"
        },
        "diagnosis": ["Pneumonia", "COPD"],
        "medications": ["Antibiotics", "Bronchodilators"],
        "insuranceActive": true,
        "lastCheckup": "2024-12-25"
    },
    {
        "patientId": "P104",
        "name": "Michael Chen",
        "age": 35,
        "bloodGroup": "AB+",
        "admissionDate": "2024-11-20",
        "status": "Discharged",
        "assignedDoctor": "DOC003",
        "ward": {
            "number": "W101",
            "type": "General",
            "floor": 1,
            "bedNumber": "B3"
        },
        "diagnosis": ["Appendicitis"],
        "medications": ["Antibiotics"],
        "insuranceActive": false,
        "lastCheckup": "2024-12-01"
    },
    {
        "patientId": "P105",
        "name": "Linda Martinez",
        "age": 55,
        "bloodGroup": "A-",
        "admissionDate": "2024-12-20",
        "status": "Admitted",
        "assignedDoctor": "DOC004",
        "ward": {
            "number": "W104",
            "type": "Cardiac",
            "floor": 3,
            "bedNumber": "B1"
        },
        "diagnosis": ["Cardiac Arrhythmia"],
        "medications": ["Beta Blockers"],
        "insuranceActive": true,
        "lastCheckup": "2024-12-26"
    }
]

// doctors collection
[
    {
        "doctorId": "DOC001",
        "name": "Dr. James Wilson",
        "specialization": "Endocrinology",
        "department": "Internal Medicine",
        "qualification": "MD",
        "experience": 15,
        "schedule": {
            "days": ["Monday", "Wednesday", "Friday"],
            "shift": "Morning",
            "consultingRoom": "R101"
        },
        "currentPatients": ["P101", "P103"],
        "expertise": ["Diabetes", "Thyroid Disorders"],
        "joinDate": "2010-06-15",
        "isAvailable": true
    },
    {
        "doctorId": "DOC002",
        "name": "Dr. Maria Garcia",
        "specialization": "Orthopedics",
        "department": "Surgery",
        "qualification": "MS",
        "experience": 10,
        "schedule": {
            "days": ["Monday", "Tuesday", "Thursday"],
            "shift": "Evening",
            "consultingRoom": "R102"
        },
        "currentPatients": [],
        "expertise": ["Joint Replacement", "Sports Injuries"],
        "joinDate": "2015-08-20",
        "isAvailable": true
    },
    {
        "doctorId": "DOC003",
        "name": "Dr. Robert Lee",
        "specialization": "General Surgery",
        "department": "Surgery",
        "qualification": "MS",
        "experience": 12,
        "schedule": {
            "days": ["Tuesday", "Wednesday", "Friday"],
            "shift": "Morning",
            "consultingRoom": "R103"
        },
        "currentPatients": [],
        "expertise": ["Laparoscopy", "Appendectomy"],
        "joinDate": "2012-03-10",
        "isAvailable": false
    },
    {
        "doctorId": "DOC004",
        "name": "Dr. Sarah Palmer",
        "specialization": "Cardiology",
        "department": "Cardiology",
        "qualification": "DM",
        "experience": 20,
        "schedule": {
            "days": ["Monday", "Thursday", "Friday"],
            "shift": "Morning",
            "consultingRoom": "R104"
        },
        "currentPatients": ["P105"],
        "expertise": ["Heart Failure", "Arrhythmia"],
        "joinDate": "2005-11-30",
        "isAvailable": true
    },
    {
        "doctorId": "DOC005",
        "name": "Dr. David Kim",
        "specialization": "Pulmonology",
        "department": "Internal Medicine",
        "qualification": "MD",
        "experience": 8,
        "schedule": {
            "days": ["Wednesday", "Thursday", "Friday"],
            "shift": "Evening",
            "consultingRoom": "R105"
        },
        "currentPatients": [],
        "expertise": ["COPD", "Asthma"],
        "joinDate": "2018-07-15",
        "isAvailable": true
    }
]
```

1. Find all patients currently admitted
2. Find doctors with more than 10 years of experience
3. List all patients with diabetes
4. Find doctors available in the morning shift
5. Find patients in the ICU ward
6. List doctors who work on Monday
7. Find patients in Ward W101
8. Find doctors who are specialists in both COPD and Asthma
9. List patients with more than one diagnosis
10. Find doctors in the Internal Medicine department
11. Add a new medication for a specific patient
12. Update a doctor's consulting room
13. Change a patient's status to discharged
14. Mark a doctor as unavailable
15. Remove all discharged patients
16. Delete patients with inactive insurance
17. Remove specific medication from a patient's list

---

# 🎯  Question C

## 📝 Instructions
Create a database named `library_db` and insert the data for books and members collections provided below. Write MongoDB queries for the following operations:

```javascript
// books collection
[
    {
        "bookId": "BK101",
        "title": "The Art of Programming",
        "author": "John Smith",
        "isbn": "978-1234567890",
        "genre": ["Technology", "Education"],
        "publishYear": 2022,
        "status": "Available",
        "location": {
            "floor": 2,
            "section": "Tech",
            "shelf": "A1",
            "position": "23"
        },
        "copies": {
            "total": 5,
            "available": 3,
            "borrowed": 2
        },
        "reviews": [
            {
                "rating": 4.5,
                "review": "Excellent book for beginners"
            }
        ],
        "borrowHistory": ["MEM103", "MEM101"],
        "isReference": false
    },
    {
        "bookId": "BK102",
        "title": "Data Science Fundamentals",
        "author": "Sarah Johnson",
        "isbn": "978-0987654321",
        "genre": ["Technology", "Mathematics"],
        "publishYear": 2023,
        "status": "Borrowed",
        "location": {
            "floor": 2,
            "section": "Tech",
            "shelf": "A2",
            "position": "15"
        },
        "copies": {
            "total": 3,
            "available": 0,
            "borrowed": 3
        },
        "reviews": [
            {
                "rating": 4.8,
                "review": "Comprehensive coverage"
            }
        ],
        "borrowHistory": ["MEM102", "MEM104"],
        "isReference": false
    },
    {
        "bookId": "BK103",
        "title": "World History Encyclopedia",
        "author": "Michael Brown",
        "isbn": "978-5432109876",
        "genre": ["History", "Reference"],
        "publishYear": 2020,
        "status": "Available",
        "location": {
            "floor": 1,
            "section": "History",
            "shelf": "B1",
            "position": "01"
        },
        "copies": {
            "total": 2,
            "available": 2,
            "borrowed": 0
        },
        "reviews": [],
        "borrowHistory": [],
        "isReference": true
    },
    {
        "bookId": "BK104",
        "title": "Modern Physics",
        "author": "Robert Wilson",
        "isbn": "978-6789054321",
        "genre": ["Science", "Physics"],
        "publishYear": 2021,
        "status": "Available",
        "location": {
            "floor": 2,
            "section": "Science",
            "shelf": "C3",
            "position": "12"
        },
        "copies": {
            "total": 4,
            "available": 4,
            "borrowed": 0
        },
        "reviews": [
            {
                "rating": 4.2,
                "review": "Good for advanced students"
            }
        ],
        "borrowHistory": ["MEM101"],
        "isReference": false
    },
    {
        "bookId": "BK105",
        "title": "Artificial Intelligence Basics",
        "author": "Emily Chen",
        "isbn": "978-3456789012",
        "genre": ["Technology", "AI"],
        "publishYear": 2023,
        "status": "Maintenance",
        "location": {
            "floor": 2,
            "section": "Tech",
            "shelf": "A3",
            "position": "05"
        },
        "copies": {
            "total": 3,
            "available": 0,
            "borrowed": 2
        },
        "reviews": [],
        "borrowHistory": ["MEM102", "MEM103"],
        "isReference": false
    }
]

// members collection
[
    {
        "memberId": "MEM101",
        "name": "Alice Thompson",
        "email": "alice@email.com",
        "joinDate": "2023-01-15",
        "membershipType": "Student",
        "status": "Active",
        "currentBorrowings": ["BK101"],
        "borrowHistory": {
            "total": 15,
            "returned": 14,
            "overdue": 0
        },
        "fines": {
            "pending": 0,
            "paid": 20
        },
        "preferences": ["Technology", "Science"],
        "notifications": true,
        "validUntil": "2024-12-31"
    },
    {
        "memberId": "MEM102",
        "name": "Bob Miller",
        "email": "bob@email.com",
        "joinDate": "2022-06-20",
        "membershipType": "Faculty",
        "status": "Active",
        "currentBorrowings": ["BK102", "BK105"],
        "borrowHistory": {
            "total": 25,
            "returned": 23,
            "overdue": 1
        },
        "fines": {
            "pending": 15,
            "paid": 0
        },
        "preferences": ["Technology", "Mathematics"],
        "notifications": true,
        "validUntil": "2025-06-20"
    },
    {
        "memberId": "MEM103",
        "name": "Carol Davis",
        "email": "carol@email.com",
        "joinDate": "2023-03-10",
        "membershipType": "Student",
        "status": "Suspended",
        "currentBorrowings": ["BK105"],
        "borrowHistory": {
            "total": 8,
            "returned": 7,
            "overdue": 2
        },
        "fines": {
            "pending": 30,
            "paid": 10
        },
        "preferences": ["Technology", "AI"],
        "notifications": false,
        "validUntil": "2024-03-09"
    },
    {
        "memberId": "MEM104",
        "name": "David Wilson",
        "email": "david@email.com",
        "joinDate": "2023-09-01",
        "membershipType": "Regular",
        "status": "Active",
        "currentBorrowings": ["BK102"],
        "borrowHistory": {
            "total": 5,
            "returned": 4,
            "overdue": 0
        },
        "fines": {
            "pending": 0,
            "paid": 0
        },
        "preferences": ["Science", "History"],
        "notifications": true,
        "validUntil": "2024-08-31"
    },
    {
        "memberId": "MEM105",
        "name": "Eva Martinez",
        "email": "eva@email.com",
        "joinDate": "2022-12-15",
        "membershipType": "Student",
        "status": "Expired",
        "currentBorrowings": [],
        "borrowHistory": {
            "total": 12,
            "returned": 12,
            "overdue": 1
        },
        "fines": {
            "pending": 5,
            "paid": 25
        },
        "preferences": ["History", "Reference"],
        "notifications": true,
        "validUntil": "2023-12-14"
    }
]
```

1. Find all books currently available
2. Find members with overdue books
3. List all technology books
4. Find books with more than 3 total copies
5. Find books on the second floor
6. List members with active status
7. Find books in Tech section
8. Find books that cover both Technology and Mathematics
9. List members with more than one current borrowing
10. Find books with high ratings (above 4.5)
11. Add a new review to a book
12. Update a member's notification preferences
13. Change a book's status to maintenance
14. Mark a membership as expired
15. Remove all expired memberships
16. Delete books under maintenance
17. Remove a specific book from member's borrowing history

