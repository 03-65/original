// @flow

import React from "react";

const path = (
  <path
    fill="currentColor"
    d="M8.91992 17.6445C8.91992 17.5703 8.8457 17.4961 8.73438 17.4961C8.62305 17.4961 8.54883 17.5703 8.54883 17.6445C8.54883 17.7188 8.62305 17.793 8.73438 17.7559C8.8457 17.7559 8.91992 17.7188 8.91992 17.6445ZM7.76953 17.459C7.76953 17.5332 7.84375 17.6445 7.95508 17.6445C8.0293 17.6816 8.14062 17.6445 8.17773 17.5703C8.17773 17.4961 8.14062 17.4219 8.0293 17.3848C7.91797 17.3477 7.80664 17.3848 7.76953 17.459ZM9.43945 17.4219C9.32812 17.4219 9.25391 17.4961 9.25391 17.6074C9.25391 17.6816 9.36523 17.7188 9.47656 17.6816C9.58789 17.6445 9.66211 17.6074 9.625 17.5332C9.625 17.459 9.51367 17.3848 9.43945 17.4219ZM11.8516 3.17188C6.73047 3.17188 2.79688 7.10547 2.79688 12.2266C2.79688 16.3457 5.35742 19.8711 9.06836 21.1328C9.55078 21.207 9.69922 20.9102 9.69922 20.6875C9.69922 20.4277 9.69922 19.166 9.69922 18.3867C9.69922 18.3867 7.10156 18.9434 6.54492 17.2734C6.54492 17.2734 6.13672 16.1973 5.54297 15.9375C5.54297 15.9375 4.68945 15.3438 5.58008 15.3438C5.58008 15.3438 6.50781 15.418 7.02734 16.3086C7.84375 17.7559 9.17969 17.3477 9.73633 17.0879C9.81055 16.4941 10.0332 16.0859 10.3301 15.8262C8.25195 15.6035 6.13672 15.3066 6.13672 11.7441C6.13672 10.7051 6.43359 10.2227 7.02734 9.55469C6.91602 9.29492 6.61914 8.33008 7.13867 7.03125C7.88086 6.80859 9.69922 8.0332 9.69922 8.0332C10.4414 7.81055 11.2207 7.73633 12 7.73633C12.8164 7.73633 13.5957 7.81055 14.3379 8.0332C14.3379 8.0332 16.1191 6.77148 16.8984 7.03125C17.418 8.33008 17.084 9.29492 17.0098 9.55469C17.6035 10.2227 17.9746 10.7051 17.9746 11.7441C17.9746 15.3066 15.7852 15.6035 13.707 15.8262C14.041 16.123 14.3379 16.6797 14.3379 17.5703C14.3379 18.7949 14.3008 20.3535 14.3008 20.6504C14.3008 20.9102 14.4863 21.207 14.9688 21.0957C18.6797 19.8711 21.2031 16.3457 21.2031 12.2266C21.2031 7.10547 17.0098 3.17188 11.8516 3.17188ZM6.39648 15.9746C6.32227 16.0117 6.35938 16.123 6.39648 16.1973C6.4707 16.2344 6.54492 16.2715 6.61914 16.2344C6.65625 16.1973 6.65625 16.0859 6.58203 16.0117C6.50781 15.9746 6.43359 15.9375 6.39648 15.9746ZM5.98828 15.6777C5.95117 15.752 5.98828 15.7891 6.0625 15.8262C6.13672 15.8633 6.21094 15.8633 6.24805 15.7891C6.24805 15.752 6.21094 15.7148 6.13672 15.6777C6.0625 15.6406 6.02539 15.6406 5.98828 15.6777ZM7.17578 17.0137C7.13867 17.0508 7.13867 17.1621 7.25 17.2363C7.32422 17.3105 7.43555 17.3477 7.47266 17.2734C7.50977 17.2363 7.50977 17.125 7.43555 17.0508C7.36133 16.9766 7.25 16.9395 7.17578 17.0137ZM6.76758 16.457C6.69336 16.4941 6.69336 16.6055 6.76758 16.6797C6.8418 16.7539 6.91602 16.791 6.99023 16.7539C7.02734 16.7168 7.02734 16.6055 6.99023 16.5312C6.91602 16.457 6.8418 16.4199 6.76758 16.457Z"
  />
);

const Github = ({ size }: { size: number }) => (
  <svg viewBox="0 0 24 25" height={size} width={size}>
    {path}
  </svg>
);

export default Github;
