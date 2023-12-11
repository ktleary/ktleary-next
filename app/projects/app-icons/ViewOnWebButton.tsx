import Link from 'next/link';

const WebSiteSvg = ({className}: {className?: string}) => (
  <svg
    fill="none"
    className={className}
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="m8 12h-.75zm8 0h.75zm-4 4v.75zm2.0694 5.7856.1544.7339zm-4.1388 0-.15444.7339zm-7.19199-13.56441-.69432-.28358zm-.52423 5.84821-.73393.1544zm7.71622-11.85502-.15444-.73393zm4.1388 0 .1544-.73392zm7.1114 6.0429.2177.71771zm-18.36283-.00036.2177-.71771zm17.75013.25039c.4394 1.07668.6819 2.25539.6819 3.49269h1.5c0-1.4349-.2815-2.80593-.7931-4.05945zm.6819 3.49269c0 .6573-.0684 1.2978-.1983 1.915l1.4678.3088c.1512-.7181.2305-1.4621.2305-2.2238zm-.1983 1.915c-.7515 3.5712-3.5655 6.3852-7.1367 7.1367l.3088 1.4678c4.1532-.8739 7.4218-4.1425 8.2957-8.2957zm-7.1367 7.1367c-.6172.1299-1.2577.1983-1.915.1983v1.5c.7617 0 1.5057-.0793 2.2238-.2305zm-1.915.1983c-.6573 0-1.2978-.0684-1.915-.1983l-.30884 1.4678c.71814.1512 1.46214.2305 2.22384.2305zm-9.25-9.25c0-1.2382.24289-2.41785.68293-3.49522l-1.38864-.56717c-.51231 1.25432-.79429 2.62639-.79429 4.06239zm7.335 9.0517c-3.57118-.7515-6.38524-3.5655-7.13669-7.1367l-1.46786.3088c.8739 4.1532 4.1426 7.4218 8.29571 8.2957zm-7.13669-7.1367c-.12987-.6172-.19831-1.2577-.19831-1.915h-1.5c0 .7617.07934 1.5057.23045 2.2238zm.48462-5.41022c1.14531-2.80414 3.62793-4.92012 6.65207-5.55647l-.30884-1.46786c-3.5188.74043-6.4013 3.19945-7.73187 6.45716zm6.65207-5.55647c.6172-.12987 1.2577-.19831 1.915-.19831v-1.5c-.7617 0-1.5057.07934-2.22384.23045zm1.915-.19831c.6573 0 1.2978.06844 1.915.19831l.3088-1.46785c-.7181-.15112-1.4621-.23046-2.2238-.23046zm1.915.19831c3.0251.63654 5.5083 2.75361 6.6531 5.559l1.3888-.56676c-1.33-3.25917-4.2132-5.71944-7.7331-6.46009zm-.5601-.50594c.2759.86475 1.2973 4.19068 1.7159 7.24648l1.4862-.20359c-.4373-3.19178-1.493-6.62119-1.7731-7.49886zm1.7159 7.24648c.1122.81895.1792 1.60545.1792 2.31115h1.5c0-.7944-.0749-1.6524-.193-2.51474zm5.8924-2.14929c-1.0975.33287-3.1589.91748-5.2854 1.30995l.2722 1.47509c2.2056-.40706 4.3273-1.00955 5.4485-1.34961zm-5.2854 1.30995c-1.29.23809-2.5781.40049-3.6778.40049v1.5c1.2292 0 2.6179-.1795 3.95-.4254zm-.4278 3.15049c0 1.0455-.1468 2.2621-.3664 3.4899l1.4766.264c.2272-1.2706.3898-2.5841.3898-3.7539zm-.3664 3.4899c-.4811 2.6912-1.2895 5.3181-1.5287 6.0677l1.429.456c.2455-.7693 1.0776-3.4704 1.5763-6.2597zm6.674-2.135c-.7496.2392-3.3765 1.0476-6.0677 1.5287l.264 1.4766c2.7893-.4987 5.4904-1.3308 6.2597-1.5763zm-6.0677 1.5287c-1.2278.2196-2.4444.3664-3.4899.3664v1.5c1.1698 0 2.4833-.1626 3.7539-.3898zm-3.4899.3664c-1.0455 0-2.26213-.1468-3.48993-.3664l-.26401 1.4766c1.27065.2272 2.58414.3898 3.75394.3898zm-3.48993-.3664c-2.69121-.4811-5.3181-1.2895-6.0677-1.5287l-.45597 1.429c.76928.2455 3.47044 1.0776 6.25966 1.5763zm-1.26007-2.8836c0 1.1698.16258 2.4833.38977 3.7539l1.47659-.264c-.21953-1.2278-.36636-2.4444-.36636-3.4899zm.38977 3.7539c.49871 2.7893 1.33086 5.4904 1.57632 6.2597l1.42901-.456c-.2392-.7496-1.04756-3.3765-1.52874-6.0677zm1.57632-13.7675c-.28005.87767-1.33579 4.30708-1.77305 7.49886l1.48612.20359c.41863-3.0558 1.44004-6.38173 1.71594-7.24648zm-1.77305 7.49886c-.11813.86234-.19304 1.72034-.19304 2.51474h1.5c0-.7057.06697-1.4922.17916-2.31115zm4.55696-.23526c-1.0997 0-2.38776-.1624-3.67778-.40049l-.27224 1.47509c1.33213.2459 2.72082.4254 3.95002.4254zm-3.67778-.40049c-2.12732-.39261-4.18936-.97749-5.28655-1.3103l-.4354 1.43542c1.12088.33999 3.24334.94277 5.44971 1.34997zm12.59468-1.2912c.0133-.00689.0291-.01355.0463-.01875l.4353 1.43543c.074-.02244.1436-.05117.2096-.08544zm-18.56958 1.30272c.07771.04753.16207.08603.25295.1136l.4354-1.43542c.03466.01051.06662.02527.09423.04215z"
      fill="white"
    />
  </svg>
);

// remove the blue outline from the link button

// const WebButton = styled.a`
//   background-color: #212121;
//   color: rgba(255, 255, 255, 0.87);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 10px 15px;
//   width: fit-content;
//   border-radius: 5px;
//   border: 1px solid rgba(255, 255, 255, 0.22);
//   text-decoration: none;
//   outline: none;

//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #1565c0;
//   }

//   svg {
//     margin-right: 8px;
//   }
// `;

const ViewOnWebButton = ({url, fill}: {url: string; fill: string}) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white rounded-xl border border-gray-500 p-2 m-4 w-fit flex flex-row justify-center items-center"
      aria-label="View on Web">
      <WebSiteSvg />
      <div className="ml-2">Website</div>
    </Link>
  );
};

export default ViewOnWebButton;
