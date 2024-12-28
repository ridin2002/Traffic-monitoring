import redis
import json

class RedisHandler:
    def __init__(self, host="localhost", port=6379, db=0):
        """
        Initialize the Redis client.
        """
        self.redis_client = redis.StrictRedis(host=host, port=port, db=db)

    def push_to_queue(self, queue_name: str, data: dict):
        """
        Push data to a Redis queue.
        :param queue_name: Name of the Redis queue
        :param data: Dictionary containing the data to push
        """
        serialized_data = json.dumps(data)  # Convert dictionary to JSON string
        self.redis_client.rpush(queue_name, serialized_data)

    def pop_from_queue(self, queue_name: str):
        """
        Pop data from a Redis queue.
        :param queue_name: Name of the Redis queue
        :return: Deserialized data from the queue or None if empty
        """
        serialized_data = self.redis_client.lpop(queue_name)
        if serialized_data:
            return json.loads(serialized_data)  # Convert JSON string back to dictionary
        return None

    def get_queue_length(self, queue_name: str) -> int:
        """
        Get the number of items in the queue.
        :param queue_name: Name of the Redis queue
        :return: Number of items in the queue
        """
        return self.redis_client.llen(queue_name)
