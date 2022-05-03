package com.xiaoyou.library.common.base

import com.xiaoyou.library.net.entity.base.LoadStatusEntity

/**
 * @description 自定义状态界面的接口，用于显示各个状态，和状态处理
 * @author 小游
 * @data 2021/02/20
 */
interface BaseIView {

    /**
     * 显示空内容
     */
    fun showEmptyUi()

    /**
     * 展示加载中界面
     */
    fun showLoadingUi()

    /**
     * 展示错误界面
     * @param errMessage String
     */
    fun showErrorUi(errMessage: String)

    /**
     * 界面显示加载成功
     */
    fun showSuccessUi()

    /**
     * 请求成功
     */
    fun onRequestSuccess()

    /**
     * 请求失败
     * @param loadStatus LoadStatusEntity
     */
    fun onRequestError(loadStatus: LoadStatusEntity)

    /**
     * 请求数据为空时 在 ResponseParser 中判断了如果是列表数据，是第一页，且没有数据时 回调这个方法
     * @param loadStatus LoadStatusEntity
     */
    fun onRequestEmpty(loadStatus: LoadStatusEntity)

    /**
     * 当界面是错误界面，空界面时，点击触发重试
     */
    fun onLoadRetry()

}