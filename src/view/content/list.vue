<template>
  <div class="container" ref="container">
    <div class="title">分类列表</div>
    <div class="add-button">
      <el-button type="primary">新增分类</el-button>
    </div>
    <div class="table-container">
      <el-table :data="categoryList">
        <el-table-column label="序号" width="60" type="index"></el-table-column>
        <el-table-column label="类型" prop="type">
          <template slot-scope="scope">
            {{ type[scope.row.type] }}
          </template>
        </el-table-column>
        <el-table-column label="标题" prop="title"></el-table-column>
        <el-table-column label="介绍" prop="content"></el-table-column>
        <el-table-column label="外链" prop="url">
          <template slot-scope="scope">
            <audio controls v-if="scope.row.url">
              <source :src="scope.row.url" />
            </audio>
          </template>
        </el-table-column>
        <el-table-column label="发布时间" prop="pubDate" width="120"></el-table-column>
        <el-table-column label="点赞数" prop="fav_nums"></el-table-column>
        <el-table-column label="是否有效" width="120" prop="status">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status === 1" type="success">有效</el-tag>
            <el-tag v-else type="info">无效</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="200">
          <template slot-scope="scope">
            <el-button @click="handleEdit(scope.row)" v-permission="{ permission: '编辑分类', type: 'disabled' }"
              >编辑</el-button
            >
            <el-button
              type="danger"
              @click="handleDelete(scope.row)"
              v-permission="{ permission: '删除分类', type: 'disabled' }"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { ContentModel } from '../../model/content'

export default {
  name: 'List',
  data() {
    return {
      categoryList: [],
      type: {
        100: '电影',
        200: '音乐',
        300: '句子'
      }
    }
  },
  created() {
    this.getCategoryList()
  },
  methods: {
    async getCategoryList() {
      this.categoryList = await ContentModel.getCategoryList()
    },
    handleEdit() {

    },
    handleDelete() {

    }
  }
}
</script>

<style scoped lang="scss">
.container {
  .title {
    height: 59px;
    line-height: 59px;
    color: $parent-title-color;
    font-size: 16px;
    font-weight: 500;
    text-indent: 40px;
    border-bottom: 1px solid #dae1ec;
  }
  .add-button {
    padding: 20px 40px;
  }
  .table-container {
    padding: 0 40px 20px 40px;
  }
}
</style>
