### SSIM

    SSIM(structural similarity index)는 MSE의 문제를 해결하기 위한 방법으로 이미지를 구성하는 픽셀의 구조를 비교한다. 계산 방법은 아래의 수식과 같이 계산한다.

    ![https://lamttic.github.io/assets/images/2020-03-23-01-02.png](https://lamttic.github.io/assets/images/2020-03-23-01-02.png)

    수식에 대한 설명은 [structural similarity](https://en.wikipedia.org/wiki/Structural_similarity)를 참고하면 된다.

    수식의 의미를 간단히 설명하자면, SSIM은 밝기, 대비, 구조를 고려한 이미지의 유사도를 구하는 방법으로 픽셀의 평균으로 이미지의 밝기를, 표준편차를 이용하여 대비를, 공분산(covariance)를 이용하여 인접 픽셀의 변화량의 비례, 반비례 여부를 구한 후 유사도에 반영한다.


    - 이미지 크기에 따라 속도 차이가 많이 난다.
        - kb 정도는 평균적으로 400ms
        - mb 넘어가면 평균적으로 2000~5000ms 정도 소요
    - noejs-ssim.js
        https://github.com/obartra/ssim

### 이미지 유사도 선택
    사내 서비스 도입할 이미지 유사도 기능으로 imageHash 를 쓰게되었따.
    - 이유
        - 다른 SSIM , MSE, 히스토그램 ... 등등 들에 비하여 가볍다.
        - 히스토그램 같은 경우 색 분포만을 고려하기 때문에 정확성 보장이 어려움
        - imagehash 는 각 이미지를 축약된 해시 값으로 변경하기 떄문에 es 검색 엔진 이용 가능
        - imagehash 내에 hash함수들을 같이 쓸경우 정확도도 높일 수 있다.
        - 사내 서비스 같은경우 이미지 환경이 똑같기 때문에 imagehash를 쓰면서 고려해야할 점이 없다