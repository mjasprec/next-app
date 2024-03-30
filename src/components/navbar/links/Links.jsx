import styles from './links.module.css';
import NavLink from './navLink/NavLink';

const Links = () => {
  const links = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
    {
      title: 'Admin',
      path: '/admin',
    },
  ];

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink
          item={link}
          key={link.title}
        />
      ))}
    </div>
  );
};

export default Links;
