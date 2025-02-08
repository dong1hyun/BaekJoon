function solution(cacheSize, cities) {
    const cache = new Map();
    const LRU = (city) => {
        city = city.toUpperCase();
        if(cache.has(city)) {
            cache.delete(city);
            cache.set(city, true);
            return 1;
        }
        else if(cache.size === cacheSize) {
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);
        }
        if(cacheSize !== 0) cache.set(city, true);
        return 5;
    };
    
    let result = 0;
    cities.forEach((city) => {
        result += LRU(city);
    });

    return result;
}



class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    insert(key) {
        if (this.cache.has(key)) {
            this.cache.delete(key); // 기존 키 삭제
        } else if (this.cache.size >= this.capacity) {
            // 가장 오래된 항목 삭제 (첫 번째 키)
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }

        this.cache.set(key, true); // 새로운 항목 추가
    }
}