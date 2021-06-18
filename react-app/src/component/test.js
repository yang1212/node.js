import { useParams, useLocation } from 'react-router-dom';

export default function Test() {
  console.log(1, useParams())
  console.log(2, useLocation)
  return (
    <div className="header">
      test
    </div>
  )
}
