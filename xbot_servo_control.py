import time

from servo import servo
from utility import translate


servo_positions = {}
servo_max_angles = {}


def _clamp(value, low, high):
    if value < low:
        return low
    if value > high:
        return high
    return value


def configure_servo(pin, max_angle, initial_angle=90):
    if max_angle not in (180, 270, 360):
        raise ValueError("max_angle must be 180, 270, or 360")
    servo_max_angles[pin] = max_angle
    set_servo(pin, initial_angle)


def _max_angle(pin):
    return servo_max_angles.get(pin, 180)


def set_servo(index, angle):
    angle = _clamp(angle, 0, _max_angle(index))
    servo.position(index, angle)
    servo_positions[index] = angle


def current_position(pin):
    if pin not in servo_positions:
        servo_positions[pin] = 0
    return servo_positions[pin]


def set_servo_position(pin, next_position, speed=70):
    speed = _clamp(speed, 0, 100)
    max_angle = _max_angle(pin)
    next_position = _clamp(next_position, 0, max_angle)
    sleep = int(translate(speed, 0, 100, 40, 0))

    start_position = _clamp(current_position(pin), 0, max_angle)
    step = -1 if next_position < start_position else 1

    for position in range(start_position, next_position + step, step):
        set_servo(pin, position)
        time.sleep_ms(sleep)


def move_servo_position(pin, angle, speed=70):
    set_servo_position(pin, current_position(pin) + angle, speed)
