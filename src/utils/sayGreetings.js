export const sayGreetings = () => {
    const date = new Date();

    const hour = date.getHours();

    switch (true) {
        case (hour >= 6 && hour < 12):
            return 'Good Morning';
        case (hour >= 12 && hour < 18):
            return 'Good Afternoon';
        case (hour >= 18 && hour < 22):
            return 'Good Evening';
        default:
            return 'Good Night';
    }
}