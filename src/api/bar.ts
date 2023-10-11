import barImage1 from '../assets/main/bar/bar1.jpg';
import barImage2 from '../assets/main/bar/bar2.jpg';
import barImage3 from '../assets/main/bar/bar3.png';
import barImage4 from '../assets/main/bar/bar4.jpg';
import barImage5 from '../assets/main/bar/bar5.jpg';
import barImage6 from '../assets/main/bar/bar6.jpg';
import barImage7 from '../assets/main/bar/bar7.jpg';
import barImage8 from '../assets/main/bar/bar8.jpg';
import barImage9 from '../assets/main/bar/bar9.jpg';
import barImage10 from '../assets/main/bar/bar10.jpg';

interface Bar {
  category: number;
  id: number;
  title: string;
  location: string;
  rating: number;
  image: string;
  tel: string;
  lat: number;
  lon: number;
  open_status: string;
  group: boolean;
  hit: number;
}

export const bars: Bar[] = [
  {
    category: 1,
    id: 0,
    title: 'A 주점',
    location: '강서구 공항동',
    rating: 5,
    image: barImage1,
    tel: '02-1234-567',
    lat: 12.345,
    lon: 67.89,
    open_status: '16:00 ~ 22:00',
    group: true,
    hit: 10,
  },
  {
    category: 2,
    id: 1,
    title: 'B 주점',
    location: '강남구 역삼동',
    rating: 4.5,
    image: barImage2,
    tel: '02-2345-6789',
    lat: 12.355,
    lon: 67.88,
    open_status: '17:00 ~ 23:00',
    group: true,
    hit: 20,
  },
  {
    category: 1,
    id: 2,
    title: 'C 주점',
    location: '서초구 서초동',
    rating: 4,
    image: barImage3,
    tel: '02-3456-7890',
    lat: 12.365,
    lon: 67.87,
    open_status: '18:00 ~ 24:00',
    group: false,
    hit: 30,
  },
  {
    category: 2,
    id: 3,
    title: 'D 주점',
    location: '강남구 강남대로',
    rating: 3.5,
    image: barImage4,
    tel: '02-4567-8901',
    lat: 12.375,
    lon: 67.86,
    open_status: '19:00 ~ 01:00',
    group: true,
    hit: 40,
  },
  {
    category: 3,
    id: 4,
    title: 'E 주점',
    location: '송파구 잠실동',
    rating: 4.5,
    image: barImage5,
    tel: '02-4567-8581',
    lat: 12.385,
    lon: 67.85,
    open_status: '12:00 ~ 24:00',
    group: true,
    hit: 50,
  },
  {
    category: 2,
    id: 5,
    title: 'F 주점',
    location: '강남구 청담동',
    rating: 2.5,
    image: barImage6,
    tel: '02-457-8901',
    lat: 12.395,
    lon: 67.84,
    open_status: '15:00 ~ 23:00',
    group: true,
    hit: 50,
  },
  {
    category: 3,
    id: 6,
    title: 'G 주점',
    location: '송파구 방이동',
    rating: 4.0,
    image: barImage7,
    tel: '02-6789-0123',
    lat: 12.405,
    lon: 67.83,
    open_status: '20:00 ~ 02:00',
    group: false,
    hit: 15,
  },
  {
    category: 1,
    id: 7,
    title: 'H 주점',
    location: '강서구 화곡동',
    rating: 3.8,
    image: barImage8,
    tel: '02-7890-1234',
    lat: 12.415,
    lon: 67.82,
    open_status: '14:00 ~ 22:00',
    group: true,
    hit: 25,
  },
  {
    category: 3,
    id: 8,
    title: 'I 주점',
    location: '송파구 가락동',
    rating: 4.2,
    image: barImage9,
    tel: '02-8901-2345',
    lat: 12.425,
    lon: 67.81,
    open_status: '16:00 ~ 23:00',
    group: true,
    hit: 35,
  },
  {
    category: 1,
    id: 9,
    title: 'J 주점',
    location: '강서구 등촌동',
    rating: 3.7,
    image: barImage10,
    tel: '02-9012-3456',
    lat: 12.435,
    lon: 67.8,
    open_status: '18:00 ~ 01:00',
    group: false,
    hit: 45,
  },
];
