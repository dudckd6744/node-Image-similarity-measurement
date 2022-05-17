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