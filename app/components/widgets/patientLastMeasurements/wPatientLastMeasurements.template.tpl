<div class="windex">
    <span class="wfont">Индекс самочувствия</span> <br>
    <span class="heart BoxDynLoading" id="wellnessSpan"></span>
</div>
    <div class="wbstats" style="display: block;">
        <div id="PatientLastMeasurements" class="PatientLastMeasurements jcarousel-skin-lastmsrm">
            <a href="#" class="arrow_up"></a>

            <div class="jcarousel jcarousel-vertical" data-jcarousel="true">
                <ul>
                    <li ng-repeat="item in $ctrl.data">
                        <div class="wstats">
                            <span class="wfont"><%= measurements[0] %></span>
                            <span class="wblue"><%= measurements[1] %> </span>
                        </div>
                    </li>
                </ul>
            </div>
            <a href="#" class="arrow_down"></a>
        </div>
    </div>
    <div class="wplot2">
        <div id="chart_wellness">
            <div class="blank">Данных не найдено</div>
        </div>
    </div>
