export default function Loading() {
  return (
    <div className='d-flex align-items-center'>
      <strong role='status'>Loading...</strong>
      <div
        className='spinner-border ms-auto text-primary'
        aria-hidden='true'
      ></div>
    </div>
  );
}
