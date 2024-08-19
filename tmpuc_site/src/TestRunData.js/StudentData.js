/*
This file is a mock database for the student portal of the LMS.
This Represent the information about a course that the lecturers or Admin would usually fill in
when adding course, creating assignments etc. It helps simulate how data wouls appear when 
uploaded by admin/lecturer. This info should be retrived from the database in final project.
*/



export const fetchData = (type) => {
  const dataSources = {

    profile:[
      {
        profilePicture: '',
        saySomething: 'I love TMPUC!',
        firstName: 'Lara',
        otherNames: 'Elizabeth',
        lastName: 'Croft',
        dateOfBirth: '28/08/2002',
        gender: 'Female',
        phoneNumber: "0501234567",
        email: 'lara_é_raider@gmail.com',
        schoolIdNumber: '00000001',
        department: 'Department of Information Technology',
        program: 'Software engineering',
        programType: 'Professional Diploma',
      }
    ],

    courses: [
      {
        title: 'Course 1',
        id: 'course1',
        subitems: [
          { title: 'Overview', link: '/overview',
            overviewItems: [
              { id: 1, name: 'Overview For Course 1', 
                description: `This is Overview Item 1 for Course 1.
                              \nWelcome to the Web Development course! This comprehensive course is designed to equip you with the essential skills and knowledge needed to 
                              build modern, responsive, and interactive websites from scratch. Throughout this course, you will learn the fundamentals of front-end and back-end development, including HTML, CSS, JavaScript, 
                              and server-side technologies like Node.js. We will cover key concepts such as responsive design, web accessibility, and web performance optimization. By the end of this course, you will have 
                              a solid understanding of web development principles and the ability to create dynamic web applications that provide an engaging user experience. Whether you are new to web development or looking 
                              to enhance your existing skills, this course will guide you through the entire development process, from concept to deployment. Get ready to dive into the exciting world of web development 
                              and start building your portfolio of professional-quality web projects!` },
            ],
           },

          { title: 'Course Outline', link: '/course-outline' },

          { title: 'Notifications', link:'/notifications',
            notifications: [
              { id: 1, name: 'Notification 1', description: 'This is Notification 1 for Course 1', creator: 'Jane Smith', date: '2024-08-02', title: 'New Assignment' },
              { id: 2, name: 'Notification 2', description: 'This is Notification 2 for Course 1', creator: 'John Doe', date: '2024-08-03', title: 'Quiz Reminder' },
            ],
          },

          { title: 'Assignments', link: '/assignments',   
            assignments:  [
              { id: 1, name: 'Assignment 1', description: 'This is Assignment 1 for Course 1' },
              { id: 2, name: 'Assignment 2', description: 'This is Assignment 2 for Course 1' }
             ]
          },

          { title: 'Quizzes', link: '/quizzes',
            quizzes: [
              { id: 1, name: 'Quiz 1', description: 'This is Quiz 1 for Course 1' },
              { id: 2, name: 'Quiz 2', description: 'This is Quiz 2 for Course 1' }
            ],
          },

          { title: 'Gradebook', link: '/gradebook',
            gradebook: [
              { id: 1, name: 'Gradebook Entry 1', description: 'This is Gradebook Entry 1 for Course 1' },
              { id: 2, name: 'Gradebook Entry 2', description: 'This is Gradebook Entry 2 for Course 1' }
            ],
          },

          { title: 'Resources', link: '/resources',
            resources: [
              { id: 1, name: 'Resource 1', description: 'This is Resource 1 for Course 1' },
              { id: 2, name: 'Resource 2', description: 'This is Resource 2 for Course 1' }
            ],
           },

          { title: 'Lecturer Details', link: '/lecturer-details' },
        ],
        
      },
      {
        title: 'Course 2',
        id: 'course2',
        subitems: [
          { title: 'Overview', link: '/overview',
            overviewItems: [
              { id: 1, name: 'Overview Item 1', 
                description: `This is Overview Item 1 for Course 2\n
                              \nWelcome to the Web Development course! This comprehensive course is designed to equip you with the essential skills and knowledge needed to 
                              build modern, responsive, and interactive websites from scratch. Throughout this course, you will learn the fundamentals of front-end and back-end development, including HTML, CSS, JavaScript, 
                              and server-side technologies like Node.js. We will cover key concepts such as responsive design, web accessibility, and web performance optimization. By the end of this course, you will have 
                              a solid understanding of web development principles and the ability to create dynamic web applications that provide an engaging user experience. Whether you are new to web development or looking 
                              to enhance your existing skills, this course will guide you through the entire development process, from concept to deployment. Get ready to dive into the exciting world of web development 
                              and start building your portfolio of professional-quality web projects!`},
            ],
           },

          { title: 'Course Outline', link: '/course-outline' },

          { title: 'Notifications', link:'/notifications',
            notifications: [
              { id: 1, name: 'Notification 1', description: 'This is Notification 1 for Course 2' },
              { id: 2, name: 'Notification 2', description: 'This is Notification 2 for Course 2' }
            ],
          },

          { title: 'Assignments', link: '/assignments',   
            assignments:  [
              { id: 1, name: 'Assignment 1', description: 'This is Assignment 1 for Course 2' },
              { id: 2, name: 'Assignment 2', description: 'This is Assignment 2 for Course 2' }
             ]
          },

          { title: 'Quizzes', link: '/quizzes',
            quizzes: [
              { id: 1, name: 'Quiz 1', description: 'This is Quiz 1 for Course 2' },
              { id: 2, name: 'Quiz 2', description: 'This is Quiz 2 for Course 2' }
            ],
          },

          { title: 'Gradebook', link: '/gradebook',
            gradebook: [
              { id: 1, name: 'Gradebook Entry 1', description: 'This is Gradebook Entry 1 for Course 2' },
              { id: 2, name: 'Gradebook Entry 2', description: 'This is Gradebook Entry 2 for Course 2' }
            ],
          },

          { title: 'Resources', link: '/resources',
            resources: [
              { id: 1, name: 'Resource 1', description: 'This is Resource 1 for Course 2' },
              { id: 2, name: 'Resource 2', description: 'This is Resource 2 for Course 2' }
            ],
           },

          { title: 'Lecturer Details', link: '/lecturer-details' },
        ],
      },
      {
        title: 'Course 3',
        id: 'course3',
        subitems: [
          { title: 'Overview', link: '/overview',
            overviewItems: [
              { id: 1, name: 'Overview For Course 3', 
                description: `This is Overview Item 1 for Course 3.
                              \nWelcome to the Web Architecture course! This comprehensive course is designed to equip you with the essential skills and knowledge needed to 
                              build modern, responsive, and interactive websites from scratch. Throughout this course, you will learn the fundamentals of front-end and back-end development, including HTML, CSS, JavaScript, 
                              and server-side technologies like Node.js. We will cover key concepts such as responsive design, web accessibility, and web performance optimization. By the end of this course, you will have 
                              a solid understanding of web development principles and the ability to create dynamic web applications that provide an engaging user experience. Whether you are new to web development or looking 
                              to enhance your existing skills, this course will guide you through the entire development process, from concept to deployment. Get ready to dive into the exciting world of web development 
                              and start building your portfolio of professional-quality web projects!` 
              },
            ],
           },

          { title: 'Course Outline', link: '/course-outline' },

          { title: 'Notifications', link:'/notifications',
            notifications: [
              { id: 1, name: 'Notification 1', description: 'This is Notification 1 for Course 3' },
              { id: 2, name: 'Notification 2', description: 'This is Notification 2 for Course 3' }
            ],
          },

          { title: 'Assignments', link: '/assignments',   
            assignments:  [
              { id: 1, name: 'Assignment 1', description: 'This is Assignment 1 for Course 3' },
              { id: 2, name: 'Assignment 2', description: 'This is Assignment 2 for Course 3' }
             ]
          },

          { title: 'Quizzes', link: '/quizzes',
            quizzes: [
              { id: 1, name: 'Quiz 1', description: 'This is Quiz 1 for Course 3' },
              { id: 2, name: 'Quiz 2', description: 'This is Quiz 2 for Course 3' }
            ],
          },

          { title: 'Gradebook', link: '/gradebook',
            gradebook: [
              { id: 1, name: 'Gradebook Entry 1', description: 'This is Gradebook Entry 1 for Course 3' },
              { id: 2, name: 'Gradebook Entry 2', description: 'This is Gradebook Entry 2 for Course 3' }
            ],
          },

          { title: 'Resources', link: '/resources',
            resources: [
              { id: 1, name: 'Resource 1', description: 'This is Resource 1 for Course 3' },
              { id: 2, name: 'Resource 2', description: 'This is Resource 2 for Course 3' }
            ],
           },

          { title: 'Lecturer Details', link: '/lecturer-details' },
        ],
      }
    ],

    resources: [
      { id: 1, name: 'Resource 1', description: 'This is Resource 1', creator: 'Jane Smith', date: '2024-08-07', title: 'New Assignment' },
      { id: 2, name: 'Resource 2', description: 'This is Resource 2', creator: 'Jane Smith', date: '2024-08-07', title: 'New Assignment' },
      { id: 3, name: 'Resource 3', description: 'This is Resource 3', creator: 'Jane Smith', date: '2024-08-07', title: 'New Assignment' },
      { id: 4, name: 'Resource 4', description: 'This is Resource 4', creator: 'Jane Smith', date: '2024-08-07', title: 'New Assignment' }
    ],
    assignments: [
      { id: 1, name: 'Assignment 1', description: 'This is Assignment 1', creator: 'Jane Smith', date: '2024-08-07', title: 'New Assignment 1' },
      { id: 2, name: 'Assignment 2', description: 'This is Assignment 2', creator: 'Jane Smith', date: '2024-08-07', title: 'New Assignment 2' },
      { id: 3, name: 'Assignment 3', description: 'This is Assignment 3', creator: 'Jane Smith', date: '2024-08-07', title: 'New Assignment 3' },
      { id: 4, name: 'Assignment 4', description: 'This is Assignment 4', creator: 'Jane Smith', date: '2024-08-07', title: 'New Assignment 4' },
      { id: 5, name: 'Assignment 5', description: 'This is Assignment 5', creator: 'Jane Smith', date: '2024-08-07', title: 'New Assignment 5' }

    ],
    quizzes: [
      { id: 1, name: 'Quiz 1', description: 'This is Quiz 1', creator: 'Jane Smith', date: '2024-08-07', title: 'New Quiz 1' },
      { id: 2, name: 'Quiz 2', description: 'This is Quiz 2', creator: 'Jane Smith', date: '2024-08-07', title: 'New Quiz 2' },
      { id: 3, name: 'Quiz 3', description: 'This is Quiz 3', creator: 'Jane Smith', date: '2024-08-07', title: 'New Quiz 3' },
      { id: 4, name: 'Quiz 4', description: 'This is Quiz 4', creator: 'Jane Smith', date: '2024-08-07', title: 'New Quiz 4' }
    ],
    notificationsPageList: [
      { id: 1, name: 'Notification 1', description: 'This is Notification 1', creator: 'Jane Smith', date: '2024-08-07', title: 'New Assignment' },
      { id: 2, name: 'Notification 2', description: 'This is Notification 2', creator: 'John Doe', date: '2024-08-01', title: 'Quiz Reminder' },
      { id: 3, name: 'Notification 3', description: 'This is Notification 3', creator: 'Alice Johnson', date: '2024-08-03', title: 'Project Submission' },
      { id: 4, name: 'Notification 4', description: 'This is Notification 4', creator: 'Bob Brown', date: '2024-08-02', title: 'Lecture Update' },
    ],
      
    notifications: Array.from({ length: 11 }, (_, i) => ({
      id: i + 1,
      name: `Notification ${i + 1}`,
      description: `This is Notification ${i + 1}`,
      title: 'Notifications',
      subitems: [
        { title: 'Details', link: `/notifications/${i + 1}` },
        { title: 'More Info', link: `/notifications/${i + 1}/info` }
      ]
    }))
  };

  return dataSources[type] || [];
};
