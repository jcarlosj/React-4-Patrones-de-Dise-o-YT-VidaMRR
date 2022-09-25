// Functional Component
export default function Todo({ id, title, completed, onCompleted }) {

    return (
        <div>
            <input
                type="checkbox"
                checked={completed}
                value={completed}
                onChange={(e) => onCompleted(id)}
            />
            {title}
        </div>
    );
  }