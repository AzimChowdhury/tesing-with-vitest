export function fetchData(data) {
    return new Promise((resolve, reject) => {

        if (data) {
            setTimeout(() => {
                resolve(data);
            }, 1000);
        } else {
            reject(new Error('Failed to fetch data'));
        }

    });
}