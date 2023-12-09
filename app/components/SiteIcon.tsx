const SiteIcon = ({
  className,
  fill = 'white',
}: {
  className?: string;
  fill?: string;
}) => (
  <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="m32.325 10.958s2.315.024 3.511 1.177c-.336-4.971-2.104-8.249-5.944-10.13-3.141-1.119-6.066 1.453-6.066 1.453s.862-1.99 2.19-2.746c-2.227-.476-4.87-.712-8.016-.712-3.136 0-5.785.227-8.006.701 1.341.745 2.215 2.758 2.215 2.758s-3.015-2.656-6.209-1.406c-3.779 1.896-5.519 5.17-5.842 10.121 1.183-1.19 3.55-1.215 3.55-1.215s-3.813 2.308-3.426 5.655c.387 2.947 1.394 5.967 2.879 8.722-.122-3.186 2.756-5.336 2.756-5.336s-2.492 5.96-.581 8.738c1.935 2.542 4.313 4.641 6.976 5.916-.955-1.645-.136-3.044-.103-2.945.042.125.459 3.112 2.137 3.743 1.178.356 2.4.548 3.654.548 1.292 0 2.55-.207 3.761-.583 1.614-.691 2.024-3.585 2.064-3.708.032-.098.843 1.287-.09 2.921 2.706-1.309 5.118-3.463 7.064-6.073 1.699-2.846-.683-8.557-.683-8.557s2.85 2.13 2.757 5.288c1.556-2.906 2.585-6.104 2.911-9.2-.035-3.061-3.459-5.13-3.459-5.13z"
      fill="#662113"
    />
    <path
      d="m13.859 9.495c.596 2.392.16 4.422-2.231 5.017-2.392.596-6.363.087-6.958-2.304-.596-2.392.469-5.39 1.81-5.724s6.784.62 7.379 3.011zm9.104 18.432c0 2.74-2.222 4.963-4.963 4.963s-4.963-2.223-4.963-4.963c0-2.741 2.223-4.964 4.963-4.964 2.741 0 4.963 2.222 4.963 4.964z"
      fill="#ffcc4d"
    />
    <path
      d="m21.309 27.927c0 1.827-1.481 3.309-3.309 3.309s-3.309-1.481-3.309-3.309c0-1.827 1.481-3.31 3.309-3.31s3.309 1.483 3.309 3.31z"
      fill="#dd2e44"
    />
    <path
      d="m11.052 8.997c.871 1.393.447 3.229-.946 4.1-1.394.871-2.608.797-3.479-.596-.871-1.394-.186-4.131.324-4.45s3.23-.448 4.101.946z"
      fill="#e6aaaa"
    />
    <path
      d="m22.141 9.495c-.596 2.392-.159 4.422 2.232 5.017 2.392.596 6.363.087 6.959-2.304.596-2.392-.47-5.39-1.811-5.724-1.342-.334-6.786.62-7.38 3.011z"
      fill="#ffcc4d"
    />
    <path
      d="m24.948 8.997c-.871 1.393-.447 3.229.945 4.1 1.394.871 2.608.797 3.479-.596.871-1.394.185-4.131-.324-4.45-.51-.319-3.229-.448-4.1.946z"
      fill="#e6aaaa"
    />
    <path
      d="m18 7.125h-.002c-12.831.001-10.873 4.958-9.498 11.542 1.375 6.583 1.884 8.333 1.884 8.333h15.228s.51-1.75 1.885-8.333c1.375-6.584 3.332-11.541-9.497-11.542z"
      fill="#ffcc4d"
    />
    <path
      d="m12 16s0-1.5 1.5-1.5 1.5 1.5 1.5 1.5v1.5s0 1.5-1.5 1.5-1.5-1.5-1.5-1.5zm9 0s0-1.5 1.5-1.5 1.5 1.5 1.5 1.5v1.5s0 1.5-1.5 1.5-1.5-1.5-1.5-1.5z"
      fill="#272b2b"
    />
    <path
      d="m20.168 21.521c-1.598 0-1.385.848-2.168 2.113-.783-1.266-.571-2.113-2.168-2.113-6.865 0-6.837.375-6.865 2.828-.058 4.986 2.802 6.132 5.257 6.06 1.597-.048 2.994-.88 3.777-2.131.783 1.251 2.179 2.083 3.776 2.131 2.455.072 5.315-1.073 5.257-6.06-.029-2.453-.001-2.828-6.866-2.828z"
      fill="#ffe8b6"
    />
    <path
      d="m14.582 21.411c-1.14.233 2.279 4.431 3.418 4.431s4.559-4.198 3.419-4.431c-1.14-.232-5.698-.232-6.837 0z"
      fill="#272b2b"
    />
    <g fill="#d99e82">
      <circle cx="11.5" cy="24.5" r=".5" />
      <circle cx="10.5" cy="26.5" r=".5" />
      <circle cx="12.5" cy="27.5" r=".5" />
      <circle cx="24.5" cy="24.5" r=".5" />
      <circle cx="25.5" cy="26.5" r=".5" />
      <circle cx="23.5" cy="27.5" r=".5" />
    </g>
  </svg>
);

export default SiteIcon;
