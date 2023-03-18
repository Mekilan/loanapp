import { CircularProgress } from '@mui/material';

const LoaderComponent = ({ loading }) => {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      {loading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default LoaderComponent;
