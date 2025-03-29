# Atividade Ponderada - Cálculo Diferencial em Dinâmica e Energia.

**Nome**: Marcos Vinicius Marcondes Silva | **Turma**: 17

## Item 1 - Cálculo das velocidades

a-) Determine as funções da velocidade horizontal [$v_x(t)$] e vertical [$v_y(t)$]

$$x(t) = -6t + 4t^2$$
$$y(t) = 5t + 0.5t^2$$

$$v_x(t) = x(t)' = -6 + 8t \therefore v_x(t) = 8t - 6 m/s$$

$$v_y = y (t)' = 5 + t \therefore v_y(t) = t + 5 m/s$$

b-) No instante $t = 2s$, qual o módulo da velocidade do carro

$$v_x(2) = 8 * 2 - 6 = 16 - 6 = 10 m/s$$

$$v_y(2) = 2 + 5 = 7 m/s$$

$$v^2(2) = v_x(2)^2 + v_y(2)^2 = 10^2 + 7^2 = 100 + 49 = 149$$

$$v(2) = \sqrt{149} = 12.21 \therefore |v(2)| \approx 12m/s$$

## Item 2 - Cálculo da energia cinética

a-) Determine a função da energia cinética $K(t)$ do carro ao longo do tempo.

$v^2(t) = v_x^2(t) + v_y^2(t)$

$v^2(t) = (8t - 6)^2 + (t + 5)^2$

$v^2(t) =  64𝑡^2 − 96𝑡 + 36 + 𝑡^2 + 10𝑡 + 25$

$v^2(t) = 65t^2 - 86t + 61$

$$v^2(t) = 65t^2 - 86t + 61$$

$K(t) = \frac{m * v^2}{2}$

$K(t) = \frac{800 * (65t^2 - 86t + 61)}{2}$

$K(t) = 400 * (65t^2 - 86t + 61)$

$$K(t) = 26000t^2 - 34400t + 24400J$$

b-) Determine o valor da energia cinética no instante $t = 2 s$.

$K(2) = 26000 * 2^2 - 34400 * 2 + 24400$

$K(2) = 26000 * 4 - 34400 * 2 + 24400$

$K(2) = 104000 - 68800 + 24400$

$$K(2) = 59600J$$

## Item 3 - Colisão e conservação do momento linear

a-) Determine o vetor velocidade $v_f(2)$ logo após a colisão.

$v_i(2) = v_x(2)\hat{i} + v_y(2)\hat{j} = 10\hat{i} + 7\hat{j}$

$v_i(2) = 10\hat{i} + 7\hat{j}$

$v_f(2) = v_i(2) * -0.4 = (10\hat{i} + 7\hat{j}) * -0.4 = -4\hat{i} + -(2.8\hat{j})$

$$v_f(2) = -4.0\hat{i} + -(2.8\hat{j})m/s$$

b-) Determine o módulo da variação do momento linear do carro
devido ao impacto.

$v_f(2) - v_i(2) = (-4.0\hat{i} - 2.8\hat{j}) - (10\hat{i} + 7\hat{j}) = 14\hat{i} - 9.8\hat{j}m/s$

$|v_f(2) - v_i(2)| = \sqrt{(-14)^2 + (-9.8)^2} = \sqrt{292.04} \approx 17.09m/s$

$$\Delta p = m * |v_f(2) - v_i(2)| = 800 * 17.09 = 13672 kg * m/s$$

c-) Explique como os conceitos de momento linear e energia
cinética influenciam a programação das colisões dentro do jogo.

**Resposta**: O momento linear pode ser utilizado nos jogos para calcular a velocidade de um objeto após uma colisão, garantindo colisões mais realistas. Já a energia cinética pode ser utilizada para definir se uma colisão é elástica ou inelástica, tornando isso fundamental para simular o efeito de impacto.
