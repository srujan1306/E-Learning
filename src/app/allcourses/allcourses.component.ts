import { Component } from '@angular/core';
import { CoursecardComponent } from '../coursecard/coursecard.component';

@Component({
  selector: 'app-allcourses',
  standalone: true,
  imports: [CoursecardComponent],
  templateUrl: './allcourses.component.html',
  styleUrl: './allcourses.component.scss',
})
export class AllcoursesComponent {
  courses = [
    {
      courseId: 1,
      name: 'Full Stack Web Development',
      price: 199.99,
      category: 'Development',
      rating: 4.8,
      instructor: 'Jane Doe',
      description:
        'Learn to build full-stack web applications using modern technologies like React, Node.js, and MongoDB.',
      prerequisites: 'Basic understanding of HTML, CSS, and JavaScript.',
      imageUrl:
        'https://codemanbd.com/wp-content/uploads/2023/03/0b4e4459-527d-48a4-99ad-efc08581c45a.jpeg',
    },
    {
      courseId: 2,
      name: 'Business Management Essentials',
      price: 149.99,
      category: 'Business',
      rating: 4.7,
      instructor: 'John Smith',
      description:
        'A comprehensive course covering fundamental business management principles and strategies.',
      prerequisites: 'None.',
      imageUrl: '',
    },
    {
      courseId: 3,
      name: 'Introduction to Financial Accounting',
      price: 129.99,
      category: 'Finance & Accounting',
      rating: 4.6,
      instructor: 'Emily Johnson',
      description:
        'Understand the basics of financial accounting, including financial statements, ledgers, and bookkeeping.',
      prerequisites: 'Basic math skills.',
      imageUrl: '',
    },
    {
      courseId: 4,
      name: 'Advanced Python Programming',
      price: 179.99,
      category: 'IT & Software',
      rating: 4.9,
      instructor: 'Michael Brown',
      description:
        'Deep dive into advanced Python concepts, including data analysis, web scraping, and automation.',
      prerequisites: 'Intermediate knowledge of Python.',
      imageUrl: '',
    },
    {
      courseId: 5,
      name: 'Microsoft Excel Mastery',
      price: 89.99,
      category: 'Office Productivity',
      rating: 4.5,
      instructor: 'Sarah Lee',
      description:
        'Master advanced Excel features and functions to enhance your data analysis and spreadsheet skills.',
      prerequisites: 'Basic knowledge of Microsoft Excel.',
      imageUrl: '',
    },
    {
      courseId: 6,
      name: 'Public Speaking for Professionals',
      price: 119.99,
      category: 'Personal Development',
      rating: 4.8,
      instructor: 'David Wilson',
      description:
        'Improve your public speaking skills with techniques for effective communication and presentation.',
      prerequisites: 'None.',
      imageUrl: '',
    },
    {
      courseId: 7,
      name: 'Graphic Design Fundamentals',
      price: 139.99,
      category: 'Design',
      rating: 4.7,
      instructor: 'Laura Martinez',
      description:
        'Learn the basics of graphic design, including typography, color theory, and layout principles.',
      prerequisites: 'None.',
      imageUrl: '',
    },
    {
      courseId: 8,
      name: 'Digital Marketing Strategy',
      price: 159.99,
      category: 'Marketing',
      rating: 4.6,
      instructor: 'Chris Anderson',
      description:
        'Develop effective digital marketing strategies using SEO, content marketing, and social media.',
      prerequisites: 'Basic understanding of marketing concepts.',
      imageUrl: '',
    },
    {
      courseId: 9,
      name: 'Introduction to Yoga',
      price: 79.99,
      category: 'Lifestyle',
      rating: 4.5,
      instructor: 'Jessica Taylor',
      description:
        'Get started with yoga practices focusing on flexibility, strength, and relaxation techniques.',
      prerequisites: 'None.',
      imageUrl: '',
    },
    {
      courseId: 10,
      name: 'Portrait Photography Basics',
      price: 149.99,
      category: 'Photography & Video',
      rating: 4.8,
      instructor: 'Robert White',
      description:
        'Learn the essentials of portrait photography, including lighting, composition, and posing techniques.',
      prerequisites: 'Basic knowledge of photography.',
      imageUrl: '',
    },
    {
      courseId: 11,
      name: 'Nutrition and Wellness',
      price: 99.99,
      category: 'Health & Fitness',
      rating: 4.7,
      instructor: 'Angela Green',
      description:
        'Understand the principles of nutrition and wellness to enhance your overall health and well-being.',
      prerequisites: 'None.',
      imageUrl: '',
    },
    {
      courseId: 12,
      name: 'Music Theory 101',
      price: 109.99,
      category: 'Music',
      rating: 4.6,
      instructor: 'Steven Clark',
      description:
        'A beginner-friendly course on the fundamentals of music theory, including scales, chords, and rhythms.',
      prerequisites: 'Basic understanding of musical notation.',
      imageUrl: '',
    },
    {
      courseId: 13,
      name: 'Introduction to Teaching',
      price: 119.99,
      category: 'Teaching & Academics',
      rating: 4.7,
      instructor: 'Maria Gonzalez',
      description:
        'Learn the basics of effective teaching practices and classroom management techniques.',
      prerequisites: 'None.',
      imageUrl: '',
    },
    {
      courseId: 14,
      name: 'JavaScript for Beginners',
      price: 139.99,
      category: 'Development',
      rating: 4.8,
      instructor: 'Daniel Lee',
      description:
        "A beginner's guide to JavaScript programming, covering core concepts and practical applications.",
      prerequisites: 'Basic understanding of HTML and CSS.',
      imageUrl: '',
    },
    {
      courseId: 15,
      name: 'Entrepreneurship and Startups',
      price: 179.99,
      category: 'Business',
      rating: 4.9,
      instructor: 'Amanda Davis',
      description:
        'Explore the essentials of starting and running a successful startup business.',
      prerequisites: 'None.',
      imageUrl: '',
    },
    {
      courseId: 16,
      name: 'Intermediate Financial Analysis',
      price: 159.99,
      category: 'Finance & Accounting',
      rating: 4.7,
      instructor: 'Jonathan Scott',
      description:
        'Advanced concepts in financial analysis, including financial ratios, forecasting, and valuation techniques.',
      prerequisites: 'Introduction to Financial Accounting.',
      imageUrl: '',
    },
    {
      courseId: 17,
      name: 'Data Structures and Algorithms',
      price: 199.99,
      category: 'IT & Software',
      rating: 4.9,
      instructor: 'Rachel Adams',
      description:
        'Deepen your understanding of data structures and algorithms to solve complex programming problems.',
      prerequisites: 'Basic programming knowledge.',
      imageUrl: '',
    },
    {
      courseId: 18,
      name: 'Advanced Word Processing',
      price: 89.99,
      category: 'Office Productivity',
      rating: 4.6,
      instructor: 'William Harris',
      description:
        'Enhance your word processing skills with advanced features and techniques in Microsoft Word.',
      prerequisites: 'Basic knowledge of Microsoft Word.',
      imageUrl: '',
    },
    {
      courseId: 19,
      name: 'Effective Time Management',
      price: 99.99,
      category: 'Personal Development',
      rating: 4.8,
      instructor: 'Samantha Collins',
      description:
        'Master time management techniques to boost productivity and achieve your goals.',
      prerequisites: 'None.',
      imageUrl: '',
    },
    {
      courseId: 20,
      name: 'UI/UX Design Principles',
      price: 149.99,
      category: 'Design',
      rating: 4.7,
      instructor: 'James Miller',
      description:
        'Learn the key principles of UI/UX design to create user-friendly and visually appealing interfaces.',
      prerequisites: 'Basic knowledge of design tools.',
      imageUrl: '',
    },
  ];
}
